import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 0.5rem;
  font-size: 1rem;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  onChange,
}) => {
  return (
    <StyledSelect disabled={disabled} onChange={onChange}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
