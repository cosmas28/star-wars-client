import React from 'react';

import { render, cleanup } from '../../test-utils';

import { DetailsPageLayout } from './';

describe('DetailsPageLayout', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();
    render(
      <DetailsPageLayout renderHeader={() => <div />} handleBackButtonClick={onClick}>
        <div>Children</div>
      </DetailsPageLayout>
    );
  });
});
