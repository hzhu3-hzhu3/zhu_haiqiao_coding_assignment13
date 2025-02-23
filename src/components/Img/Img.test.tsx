import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img', () => {
  test('should render image with given src', () => {
    render(<Img src="/logo192.png" alt="Test Image" />);
    const imgElement = screen.getByAltText(/test image/i);
    expect(imgElement).toBeInTheDocument();
  });

  test('disabled image should have grayscale', () => {
    render(<Img src="/logo192.png" disabled alt="Disabled Image" />);
    const imgElement = screen.getByAltText(/disabled image/i);
    expect(imgElement).toHaveStyle('filter: grayscale(100%)');
    expect(imgElement).toHaveStyle('cursor: not-allowed');
  });
});
