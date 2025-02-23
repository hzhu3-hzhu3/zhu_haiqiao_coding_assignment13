import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTr = styled.tr<TableRowProps>`
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};

  &:hover {
    background-color: #f9f9f9;
  }
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled }) => {
  return <StyledTr disabled={disabled}>{children}</StyledTr>;
};

export default TableRow;
