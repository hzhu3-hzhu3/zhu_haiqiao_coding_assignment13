import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTfoot = styled.tfoot<TableFooterProps>`
  background-color: #fafafa;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled }) => {
  return <StyledTfoot disabled={disabled}>{children}</StyledTfoot>;
};

export default TableFooter;
