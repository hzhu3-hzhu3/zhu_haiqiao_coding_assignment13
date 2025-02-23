import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? '#aaa' : '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  input {
    margin-right: 0.5rem;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label = 'Radio',
  disabled = false,
  name,
  checked,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <StyledLabel disabled={disabled}>
      <input
        type="radio"
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
