import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  test('should render with given text', () => {
    render(<Text>Test Text</Text>);
    const textElement = screen.getByText(/test text/i);
    expect(textElement).toBeInTheDocument();
  });

  test('disabled state should have grey color', () => {
    render(<Text disabled>Disabled Text</Text>);
    const textElement = screen.getByText(/disabled text/i);
    expect(textElement).toHaveStyle('color: #aaa');
  });
});
