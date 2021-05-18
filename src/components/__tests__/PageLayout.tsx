import React from 'react';

import { render, cleanup } from '../../test-utils';

import { PageLayout } from '../PageLayout';

describe('PageLayout', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();
    render(
      <PageLayout>
        <div>children</div>
      </PageLayout>
    );
  });
});
