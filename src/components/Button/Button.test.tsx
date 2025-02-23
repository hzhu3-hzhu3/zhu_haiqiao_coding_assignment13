import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('should be visible with given label', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText(/test button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should have grey background and not-allowed cursor if disabled', () => {
    render(<Button label="Disabled Button" disabled={true} />);
    const buttonElement = screen.getByText(/disabled button/i);
    expect(buttonElement).toHaveStyle('background-color: #ccc');
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
  });
});
