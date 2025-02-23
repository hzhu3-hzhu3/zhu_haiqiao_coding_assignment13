import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

describe('Table', () => {
  test('should render children, including header/footer/cells', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Header 1</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Row1-Col1</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(screen.getByText(/header 1/i)).toBeInTheDocument();
    expect(screen.getByText(/row1-col1/i)).toBeInTheDocument();
    expect(screen.getByText(/footer 1/i)).toBeInTheDocument();
  });

  test('disabled table should have reduced opacity and not-allowed cursor', () => {
    render(<Table disabled />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle('opacity: 0.5');
    expect(tableElement).toHaveStyle('cursor: not-allowed');
  });
});
