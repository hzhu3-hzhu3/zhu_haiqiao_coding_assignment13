import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
} as Meta<typeof Card>;

export const Default: StoryObj<CardProps> = {
  args: {
    title: 'Default Card',
    content: 'This is a default card.',
    disabled: false,
  },
};

export const Disabled: StoryObj<CardProps> = {
  args: {
    title: 'Disabled Card',
    content: 'This card is disabled.',
    disabled: true,
  },
};
