import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTd = styled.td<TableCellProps>`
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
  border: 1px solid #ccc;
  padding: 8px;
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled,
  colSpan,
}) => {
  return (
    <StyledTd disabled={disabled} colSpan={colSpan}>
      {children}
    </StyledTd>
  );
};

export default TableCell;
