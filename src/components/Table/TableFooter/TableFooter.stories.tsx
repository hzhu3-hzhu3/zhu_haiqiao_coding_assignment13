import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TableFooter from './TableFooter';
import { TableFooterProps } from './TableFooter.types';

export default {
  title: 'Components/Table/TableFooter',
  component: TableFooter,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableFooter>;

export const Default: StoryObj<TableFooterProps> = {
  args: {
    disabled: false,
    children: (
      <tr>
        <td colSpan={2}>Footer Row</td>
      </tr>
    ),
  },
};

export const Disabled: StoryObj<TableFooterProps> = {
  args: {
    disabled: true,
    children: (
      <tr>
        <td colSpan={2}>Disabled Footer</td>
      </tr>
    ),
  },
};
