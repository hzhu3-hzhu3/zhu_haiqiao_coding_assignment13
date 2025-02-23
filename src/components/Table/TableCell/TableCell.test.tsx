import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('TableCell', () => {
  test('should render cell content', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell Test</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText(/cell test/i)).toBeInTheDocument();
  });

  test('disabled cell should have 0.5 opacity', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>Disabled Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const tdElement = screen.getByText(/disabled cell/i);
    expect(tdElement).toHaveStyle('opacity: 0.5');
  });
});
