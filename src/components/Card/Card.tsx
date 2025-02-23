import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || 'auto'};
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;
const Content = styled.p`
  margin: 0;
`;

const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  content = 'Card content...',
  disabled = false,
  width,
  height,
}) => {
  return (
    <StyledCard disabled={disabled} width={width} height={height}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </StyledCard>
  );
};

export default Card;
