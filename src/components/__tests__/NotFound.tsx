import React from 'react';

import { NotFound } from '../NotFound';
import { render, cleanup } from '../../test-utils';

describe('NotFound', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();
    render(
      <NotFound
        handleClick={onClick}
        buttonLabel="Previos page"
        message="No search results!"
        iconName="search"
      />
    );
  });
});
