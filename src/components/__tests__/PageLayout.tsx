import React from 'react';

import { PageLayout } from '../PageLayout';
import { render, cleanup } from '../../test-utils';

describe('PageLayout', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    render(
      <PageLayout>
        <div>children</div>
      </PageLayout>
    );
  });
});
