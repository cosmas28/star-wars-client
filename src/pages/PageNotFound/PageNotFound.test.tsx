import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, cleanup, fireEvent, screen } from '../../test-utils';

import { PageNotFound } from './';

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
