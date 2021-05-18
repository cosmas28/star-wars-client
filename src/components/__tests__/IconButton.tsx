import React from 'react';

import { IconButton } from '../IconButton';
import { render, cleanup } from '../../test-utils';

describe('IconButton', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();

    render(<IconButton onClick={onClick} iconName="chevronRight" />);
  });
});
