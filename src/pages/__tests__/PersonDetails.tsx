import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { InMemoryCache } from '@apollo/client';

import { renderApollo, cleanup, screen, fireEvent, waitFor } from '../../test-utils';

import { GET_PERSON_DETAILS_BY_NAME, PersonDetails } from '../PersonDetails';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useParams: () => ({
    name: 'Owen Lars',
  }),
}));

const mockPerson = {
  name: 'Owen Lars',
  height: '178',
  mass: '120',
  hairColor: 'n/a',
  skinColor: 'a/n',
  eyeColor: 'n/a',
  birthYear: 'n/a',
  gender: 'male',
  homeworld: 'http://swapi.dev/api/planets/1/',
  films: 0,
  species: 0,
  vehicles: 0,
  starships: 0,
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
};

describe('PersonDetails', () => {
  afterEach(cleanup);

  describe('with data', () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_PERSON_DETAILS_BY_NAME,
          variables: {
            name: 'Owen Lars',
          },
        },
        result: {
          data: {
            person: mockPerson,
          },
        },
      },
    ];

    it('renders without error', () => {
      renderApollo(
        <MemoryRouter>
          <PersonDetails />
        </MemoryRouter>,
        { mocks, cache }
      );
    });

    it('should be able to click on home world link', async () => {
      renderApollo(
        <MemoryRouter>
          <PersonDetails />
        </MemoryRouter>,
        { mocks, cache }
      );

      await waitFor(() => {
        fireEvent.click(screen.getByText('Home world'));
      });
    });

    it('should display avatar with letter A when name is null', async () => {
      const cache = new InMemoryCache({ addTypename: false });
      const mocks = [
        {
          request: {
            query: GET_PERSON_DETAILS_BY_NAME,
            variables: {
              name: 'Owen Lars',
            },
          },
          result: {
            data: {
              person: {
                ...mockPerson,
                name: '',
              },
            },
          },
        },
      ];
      renderApollo(
        <MemoryRouter>
          <PersonDetails />
        </MemoryRouter>,
        { mocks, cache }
      );

      await waitFor(() => {
        expect(screen.getByText('A')).toBeInTheDocument();
      });
    });
  });

  describe('without data', () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_PERSON_DETAILS_BY_NAME,
          variables: {
            name: 'Owen Lars',
          },
        },
        result: {
          data: {
            person: {},
          },
        },
      },
    ];

    it('should display item does not exist', async () => {
      renderApollo(
        <MemoryRouter>
          <PersonDetails />
        </MemoryRouter>,
        { mocks, cache }
      );

      await waitFor(() => {
        expect(screen.getByText('Sorry!! This item does not exist.')).toBeInTheDocument();
      });
    });
  });

  describe('with error', () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_PERSON_DETAILS_BY_NAME,
          variables: {
            name: 'Owen Lars',
          },
        },
        result: {},
        error: new Error('Server error'),
      },
    ];

    it('should display item does not exist', async () => {
      renderApollo(
        <MemoryRouter>
          <PersonDetails />
        </MemoryRouter>,
        { mocks, cache }
      );

      await waitFor(() => {
        expect(screen.getByText('Sorry!! This item does not exist.')).toBeInTheDocument();
      });
    });
  });
});
