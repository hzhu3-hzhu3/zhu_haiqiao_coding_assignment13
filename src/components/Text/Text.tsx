import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  color: ${({ disabled, color }) => (disabled ? '#aaa' : color || '#333')};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
`;

const Text: React.FC<TextProps> = ({
  children,
  disabled = false,
  color,
  fontSize,
}) => {
  return (
    <StyledText disabled={disabled} color={color} fontSize={fontSize}>
      {children || 'Default Text Content'}
    </StyledText>
  );
};

export default Text;
