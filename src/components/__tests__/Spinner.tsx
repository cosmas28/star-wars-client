import { getByTestId } from '@testing-library/dom';
import React from 'react';

import { render, cleanup, screen } from '../../test-utils';

import { Spinner } from '../Spinner';

describe('Spinner', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    render(<Spinner page={true} size="large" />);
  });

  it('renders spinner element within page container', () => {
    render(<Spinner page={true} size="large" />);

    expect(screen.getByTestId('container')).toBeInTheDocument();
    expect(screen.getByTestId('spinner-element')).toBeInTheDocument();
  });

  it('renders spinner element without page container', () => {
    render(<Spinner page={false} size="small" />);

    expect(screen.getByTestId('spinner-element')).toBeInTheDocument();
  });
});
