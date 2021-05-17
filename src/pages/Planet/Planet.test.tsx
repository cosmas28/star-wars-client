import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { InMemoryCache } from '@apollo/client';

import { renderApollo, cleanup, screen, fireEvent } from '../../test-utils';

import { GET_PLANET_DETAILS_BY_ID, Planet } from './';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
    goBack: jest.fn(),
  }),
  useParams: () => ({
    id: '1',
  }),
}));

const mockPlanet = {
  __typename: 'Planet',
  name: 'Tatooine',
  rotationPeriod: 'n/a',
  orbitalPeriod: 'n/a',
  diameter: '10465',
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surfaceWater: 'n/a',
  population: '200000',
  residents: 10,
  films: 5,
  created: 'Dec 9, 2014 4:50 PM',
  edited: 'Dec 20, 2014 11:58 PM',
};

describe('Planet', () => {
  afterEach(cleanup);

  describe('with data', () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_PLANET_DETAILS_BY_ID,
          variables: {
            id: '1',
          },
        },
        result: {
          data: {
            planet: mockPlanet,
          },
        },
      },
    ];

    it('renders planet details', async () => {
      renderApollo(
        <MemoryRouter>
          <Planet />
        </MemoryRouter>,
        { mocks, cache }
      );

      await new Promise((resolve) => setTimeout(resolve, 0));
			screen.debug();
    });

    it('should be able to click on back button', async () => {
      renderApollo(
        <MemoryRouter>
          <Planet />
        </MemoryRouter>,
        { mocks, cache }
      );

      await new Promise((resolve) => setTimeout(resolve, 0));

      fireEvent.click(screen.getByTestId('icon-button'));
    });
  });

  describe('with error', () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_PLANET_DETAILS_BY_ID,
          variables: {
            id: '1',
          },
        },
        result: {},
        error: new Error('Server error'),
      },
    ];

    it('should display item does not exist', async () => {
      renderApollo(
        <MemoryRouter>
          <Planet />
        </MemoryRouter>,
        { mocks, cache }
      );

      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(screen.getByText('Sorry!! This item does not exist.')).toBeInTheDocument();
    });
  });

  describe('without planet data', () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_PLANET_DETAILS_BY_ID,
          variables: {
            id: '1',
          },
        },
        result: {
          data: {
            planet: {},
          },
        },
      },
    ];

    it('should display this item does not exist', async () => {
      renderApollo(
        <MemoryRouter>
          <Planet />
        </MemoryRouter>,
        { mocks, cache }
      );

      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(screen.getByText('Sorry!! This item does not exist.')).toBeInTheDocument();
    });
  });
});
