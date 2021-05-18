import React from 'react';

import { render, cleanup } from '../../test-utils';

import { IconButton } from '../IconButton';

describe('IconButton', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();
    render(<IconButton onClick={onClick} iconName="chevronRight" />);
  });
});
