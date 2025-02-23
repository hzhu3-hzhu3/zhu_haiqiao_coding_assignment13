import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;

const Img: React.FC<ImgProps> = ({ src, alt = '', disabled, width, height }) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      disabled={disabled}
      width={width}
      height={height}
    />
  );
};

export default Img;
