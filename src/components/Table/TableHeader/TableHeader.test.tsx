import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

describe('TableHeader', () => {
  test('should render header cells', () => {
    render(
      <table>
        <TableHeader>
          <tr><th>Header Test</th></tr>
        </TableHeader>
      </table>
    );
    expect(screen.getByText(/header test/i)).toBeInTheDocument();
  });

  test('disabled should have lower opacity', () => {
    render(
      <table>
        <TableHeader disabled>
          <tr><th>Disabled Header</th></tr>
        </TableHeader>
      </table>
    );
    const theadElement = screen.getByText(/disabled header/i).closest('thead');
    expect(theadElement).toHaveStyle('opacity: 0.5');
  });
});
