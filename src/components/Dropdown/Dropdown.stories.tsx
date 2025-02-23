import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Dropdown>;

export const Default: StoryObj<DropdownProps> = {
  args: {
    options: ['Option A', 'Option B', 'Option C'],
    disabled: false,
  },
};

export const Disabled: StoryObj<DropdownProps> = {
  args: {
    options: ['Option A', 'Option B'],
    disabled: true,
  },
};
