import React from 'react';
import { InMemoryCache } from '@apollo/client';

import { renderApollo } from './test-utils';
import { GET_PEOPLE_DATA } from './pages/People';
import App from './App';

describe('App', () => {
  const cache = new InMemoryCache({ addTypename: false });

  describe('with data', () => {
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
        error: new Error(),
      },
    ];

    it('renders app without error', () => {
      renderApollo(<App />, { mocks, cache });
    });
  });
});
