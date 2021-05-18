import React from 'react';

import { Snackbar } from '../Snackbar';
import { render, cleanup } from '../../test-utils';

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
