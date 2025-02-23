import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundUrl: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    disabled: { control: 'boolean' },
    height: { control: 'text' },
  },
} as Meta<typeof HeroImage>;

export const Default: StoryObj<HeroImageProps> = {
  args: {
    backgroundUrl: '/logo192.png',
    title: 'Welcome!',
    subtitle: 'This is a HeroImage',
    disabled: false,
    height: '300px',
  },
};

export const Disabled: StoryObj<HeroImageProps> = {
  args: {
    backgroundUrl: '/logo192.png',
    title: 'Disabled Hero',
    subtitle: 'Greyed out banner',
    disabled: true,
  },
};
