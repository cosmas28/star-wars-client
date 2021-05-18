import React from 'react';

import { Input } from '../Input';
import { render, cleanup, screen, fireEvent } from '../../test-utils';

describe('Input', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onChange = jest.fn();

    render(<Input onChange={onChange} placeholder="Search" value="luke" />);
  });

  it('should call the onChange callback handler', async () => {
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
