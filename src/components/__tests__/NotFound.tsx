import React from 'react';

import { render, cleanup } from '../../test-utils';

import { NotFound } from '../NotFound';

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
