import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
} as Meta<typeof RadioButton>;

export const Default: StoryObj<RadioButtonProps> = {
  args: {
    label: 'Option 1',
    disabled: false,
    name: 'exampleGroup',
    checked: false,
  },
};

export const Disabled: StoryObj<RadioButtonProps> = {
  args: {
    label: 'Disabled Option',
    disabled: true,
    name: 'exampleGroup',
    checked: false,
  },
};
