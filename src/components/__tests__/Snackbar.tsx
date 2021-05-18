import React from 'react';

import { render, cleanup } from '../../test-utils';

import { Snackbar } from '../Snackbar';

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
