import React from 'react';

import { render, cleanup } from '../../test-utils';

import { Button } from '../Button';

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
