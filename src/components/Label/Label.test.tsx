import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
  test('should render with given text', () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText(/test label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('should have grey color and not-allowed cursor if disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText(/disabled label/i);
    expect(labelElement).toHaveStyle('color: #aaa');
    expect(labelElement).toHaveStyle('cursor: not-allowed');
  });
});
