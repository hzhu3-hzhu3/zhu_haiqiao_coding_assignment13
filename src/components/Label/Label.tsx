import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.span<LabelProps>`
  color: ${({ disabled, color }) => (disabled ? '#aaa' : color || '#000')};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
`;

const Label: React.FC<LabelProps> = ({
  text = 'Default Label',
  disabled = false,
  color,
  fontSize,
}) => {
  return (
    <StyledLabel disabled={disabled} color={color} fontSize={fontSize}>
      {text}
    </StyledLabel>
  );
};

export default Label;
