import React from 'react';

import { DetailsRow } from '../DetailsRow';
import { render, cleanup } from '../../test-utils';

describe('DetailsRow', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    render(<DetailsRow label="Mass" value="64 kg" />);
  });
});
