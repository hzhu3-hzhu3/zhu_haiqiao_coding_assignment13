import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
  },
} as Meta<typeof Text>;

export const Default: StoryObj<TextProps> = {
  args: {
    children: 'Sample Text',
    disabled: false,
  },
};

export const Disabled: StoryObj<TextProps> = {
  args: {
    children: 'Disabled Text',
    disabled: true,
  },
};
