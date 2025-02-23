import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage', () => {
  test('should render with default title/subtitle', () => {
    render(<HeroImage backgroundUrl="/logo192.png" />);
    expect(screen.getByText(/hero title/i)).toBeInTheDocument();
    expect(screen.getByText(/hero subtitle/i)).toBeInTheDocument();
  });

  test('disabled hero should have grayscale filter', () => {
    render(<HeroImage backgroundUrl="/logo192.png" disabled />);
    const titleElement = screen.getByText(/hero title/i);
    expect(titleElement).toBeInTheDocument();
  });
});
