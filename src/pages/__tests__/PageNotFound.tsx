import React from 'react';

import { PageNotFound } from '../PageNotFound';
import { render, cleanup } from '../../test-utils';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('PageNotFound', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    render(<PageNotFound />);
  });
});
