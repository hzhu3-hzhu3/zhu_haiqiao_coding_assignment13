import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
} as Meta<typeof Img>;

export const Default: StoryObj<ImgProps> = {
  args: {
    src: '/logo192.png',
    alt: 'Placeholder',
    disabled: false,
    width: '150px',
  },
};

export const Disabled: StoryObj<ImgProps> = {
  args: {
    src: '/logo192.png',
    alt: 'Disabled Image',
    disabled: true,
    width: '150px',
  },
};
