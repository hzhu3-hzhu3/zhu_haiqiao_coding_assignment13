import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
  },
} as Meta<typeof Label>;

export const Default: StoryObj<LabelProps> = {
  args: {
    text: 'Hello Label',
    disabled: false,
    color: '#000',
    fontSize: '1rem',
  },
};

export const Disabled: StoryObj<LabelProps> = {
  args: {
    text: 'Disabled Label',
    disabled: true,
  },
};
