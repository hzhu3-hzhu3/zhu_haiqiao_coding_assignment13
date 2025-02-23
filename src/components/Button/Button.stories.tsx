import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    label: 'Click Me',
    disabled: false,
    backgroundColor: '#007bff',
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    backgroundColor: '#007bff',
  },
};
