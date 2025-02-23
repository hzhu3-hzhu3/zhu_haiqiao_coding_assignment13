import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

describe('TableFooter', () => {
  test('should render footer content', () => {
    render(
      <table>
        <TableFooter>
          <tr><td>Footer Test</td></tr>
        </TableFooter>
      </table>
    );
    expect(screen.getByText(/footer test/i)).toBeInTheDocument();
  });

  test('disabled footer should have 0.5 opacity', () => {
    render(
      <table>
        <TableFooter disabled>
          <tr><td>Disabled Footer</td></tr>
        </TableFooter>
      </table>
    );
    const footerElement = screen.getByText(/disabled footer/i).closest('tfoot');
    expect(footerElement).toHaveStyle('opacity: 0.5');
  });
});
