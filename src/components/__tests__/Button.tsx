import React from 'react';

import { Button } from '../Button';
import { render, cleanup } from '../../test-utils';

describe('Button', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();

    render(
      <Button onClick={onClick} trailingIcon="chevronRight" variant="secondary">
        Label
      </Button>
    );
  });
});
