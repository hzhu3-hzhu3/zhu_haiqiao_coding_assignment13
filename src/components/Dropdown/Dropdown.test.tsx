import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('should render options', () => {
    render(<Dropdown options={['Option A', 'Option B']} />);
    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('Option B')).toBeInTheDocument();
  });

  test('disabled should have grey background and not-allowed cursor', () => {
    render(<Dropdown options={['Option A']} disabled />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveStyle('background-color: #ccc');
    expect(selectElement).toHaveStyle('cursor: not-allowed');
  });
});
