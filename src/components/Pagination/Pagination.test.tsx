import React from 'react';

import { render, cleanup, screen, fireEvent } from '../../test-utils';

import { Pagination } from './';

describe('Pagination', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onChange = jest.fn();

    render(
      <Pagination pageCount={100} currentPage={1} rangeToDisplay={5} onPageChange={onChange} />
    );
  });

  it('should be able to click next button', () => {
    const onChange = jest.fn();

    render(
      <Pagination pageCount={100} currentPage={1} rangeToDisplay={3} onPageChange={onChange} />
    );

    fireEvent.click(screen.getByTestId('next-button'));
  });

  it('should be able to click prev button', () => {
    const onChange = jest.fn();

    render(
      <Pagination pageCount={100} currentPage={1} rangeToDisplay={3} onPageChange={onChange} />
    );

    fireEvent.click(screen.getByTestId('prev-button'));
  });

  it('should be able to click a page', () => {
    const onChange = jest.fn();

    render(
      <Pagination pageCount={100} currentPage={1} rangeToDisplay={3} onPageChange={onChange} />
    );

    fireEvent.click(screen.getByText('1'));
  });
});
