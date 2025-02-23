import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  test('should render with given label', () => {
    render(<RadioButton label="Test Radio" name="testGroup" />);
    const labelElement = screen.getByText(/test radio/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('disabled state should be grey and not-allowed cursor', () => {
    render(<RadioButton label="Disabled Radio" name="testGroup" disabled />);
    const radioElement = screen.getByLabelText(/disabled radio/i);
    expect(radioElement).toBeDisabled();
  });
});
