import React from 'react';

import { render, cleanup } from '../../test-utils';

import { DetailsRow } from '../DetailsRow';

describe('DetailsRow', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    render(<DetailsRow label="Mass" value="64 kg" />);
  });
});
