import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

describe('TableRow', () => {
  test('should render row cells', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Row Test</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByText(/row test/i)).toBeInTheDocument();
  });

  test('disabled row should have 0.5 opacity', () => {
    render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>Disabled Row</td>
          </TableRow>
        </tbody>
      </table>
    );
    const rowElement = screen.getByText(/disabled row/i).closest('tr');
    expect(rowElement).toHaveStyle('opacity: 0.5');
  });
});
