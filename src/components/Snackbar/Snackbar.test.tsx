import React from 'react';

import { render, cleanup } from '../../test-utils';

import { Snackbar } from './';

describe('Snackbar', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();

    render(
      <Snackbar active={true} close={onClick}>
        Displayed message
      </Snackbar>
    );
  });
});
