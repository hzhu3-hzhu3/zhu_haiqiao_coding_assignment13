import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('should render with given title and content', () => {
    render(<Card title="Test Card" content="Card content here." />);
    expect(screen.getByText(/test card/i)).toBeInTheDocument();
    expect(screen.getByText(/card content here./i)).toBeInTheDocument();
  });

  test('disabled state should have lower opacity and not-allowed cursor', () => {
    render(<Card title="Disabled Card" disabled />);
    const cardTitle = screen.getByText(/disabled card/i);
    expect(cardTitle).toBeInTheDocument();

    const cardContainer = cardTitle.closest('div');
    expect(cardContainer).toHaveStyle('opacity: 0.5');
    expect(cardContainer).toHaveStyle('cursor: not-allowed');
  });
});
