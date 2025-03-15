import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundUrl',
})<HeroImageProps>`
  background-image: ${({ backgroundUrl }) => `url(${backgroundUrl})`};
  background-size: cover;
  background-position: center;
  height: ${({ height }) => height || '300px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0.5rem 0;
`;
const Subtitle = styled.p`
  font-size: 1.2rem;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  backgroundUrl,
  title = 'Hero Title',
  subtitle = 'Hero Subtitle',
  disabled,
  height,
}) => {
  return (
    <StyledHero backgroundUrl={backgroundUrl} disabled={disabled} height={height}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </StyledHero>
  );
};

export default HeroImage;
