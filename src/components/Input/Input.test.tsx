import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, cleanup, screen, fireEvent } from '../../test-utils';

import { Input } from './';

describe('Input', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} placeholder="Search" value="luke" />);
  });

  it('calls the onChange callback handler', async () => {
    const onChange = jest.fn();

    render(<Input onChange={onChange} placeholder="Search" value="" />);

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'luke' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should be able to click on cross button', () => {
    const onChange = jest.fn();

    render(<Input onChange={onChange} placeholder="Search" value="luke" />);

    fireEvent.click(screen.getByTestId('input-cross-button'));
  });
});
