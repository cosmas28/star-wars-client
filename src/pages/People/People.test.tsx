import React from 'react';
import { InMemoryCache } from '@apollo/client';

import { renderApollo, cleanup, screen, fireEvent } from '../../test-utils';

import { GET_PEOPLE_DATA, People } from './';

const mockPerson = {
  name: 'Luke Skywalker',
  height: '172',
  gender: 'male',
  mass: '77',
  homeworld: 'http://swapi.dev/api/planets/1/',
};

const mockPeopleData = {
  __typename: 'PeopleData',
  count: 84,
  people: [mockPerson],
};

describe('People page', () => {
  afterEach(cleanup);

  describe('with data', () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_PEOPLE_DATA,
          variables: {
            page: 1,
            search: '',
          },
        },
        result: {
          data: {
            peopleData: mockPeopleData,
          },
        },
      },
    ];
    it('renders people', async () => {
      renderApollo(<People />, {
        mocks,
        cache,
      });

      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });

    it('calls the onChange callback handler', async () => {
      renderApollo(<People />, {
        mocks,
        cache,
      });

      await new Promise((resolve) => setTimeout(resolve, 0));

      fireEvent.change(screen.getByPlaceholderText('Search…'), {
        target: { value: 'luke' },
      });

      expect(screen.getByDisplayValue('luke')).toBeInTheDocument();
    });
  });

  describe('wifth error', () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_PEOPLE_DATA,
          variables: {
            page: 1,
            search: '',
          },
        },
        result: {},
        error: new Error('Server error'),
      },
    ];

    it('should show error message', async () => {
      renderApollo(<People />, {
        mocks,
        cache,
      });

      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(screen.getByText('Something seems to wrong with the system')).toBeInTheDocument();
    });
  });

  describe('without data', () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_PEOPLE_DATA,
          variables: {
            page: 1,
            search: '',
          },
        },
        result: {
          data: {
            peopleData: { count: 0, people: [] },
          },
        },
      },
    ];

    it('should display no results found', async () => {
      renderApollo(<People />, {
        mocks,
        cache,
      });

      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(screen.getByText('No results found!')).toBeInTheDocument();
    });
  });
});
