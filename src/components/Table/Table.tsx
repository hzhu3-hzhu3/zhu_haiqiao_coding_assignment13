import React from 'react';
import styled, { css } from 'styled-components';
import { TableProps } from './Table.types';


const ResponsiveWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;


const StyledTable = styled.table<TableProps>`
  border-collapse: collapse;
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  width: ${({ width }) => width || '100%'};


  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }


  ${({ striped }) =>
    striped &&
    css`
      tbody tr:nth-child(even) {
        background-color: #f9f9f9;
      }
    `}

  ${({ hoverable }) =>
    hoverable &&
    css`
      tbody tr:hover {
        background-color: #eee;
      }
    `}
`;

const Table: React.FC<TableProps> = ({
  children,
  disabled = false,
  backgroundColor,
  width,
  striped,
  hoverable,
  responsive,
}) => {
  const tableElement = (
    <StyledTable
      disabled={disabled}
      backgroundColor={backgroundColor}
      width={width}
      striped={striped}
      hoverable={hoverable}
    >
      {children}
    </StyledTable>
  );

  if (responsive) {
    return <ResponsiveWrapper>{tableElement}</ResponsiveWrapper>;
  }
  return tableElement;
};

export default Table;
