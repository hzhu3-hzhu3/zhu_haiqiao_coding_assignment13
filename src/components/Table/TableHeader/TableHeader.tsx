import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledThead = styled.thead<TableHeaderProps>`
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
  background-color: #f1f1f1;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => {
  return <StyledThead disabled={disabled}>{children}</StyledThead>;
};

export default TableHeader;
