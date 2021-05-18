import React from 'react';

import { Avatar } from '../Avatar';
import { render, cleanup } from '../../test-utils';

describe('Avatar', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    render(<Avatar initialLetter="B" sizeInPx="40" />);
  });
});
