import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TableRow from './TableRow';
import { TableRowProps } from './TableRow.types';

export default {
  title: 'Components/Table/TableRow',
  component: TableRow,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableRow>;

export const Default: StoryObj<TableRowProps> = {
  args: {
    disabled: false,
    children: (
      <>
        <td>Row Cell 1</td>
        <td>Row Cell 2</td>
      </>
    ),
  },
};

export const Disabled: StoryObj<TableRowProps> = {
  args: {
    disabled: true,
    children: (
      <>
        <td>Disabled Row</td>
      </>
    ),
  },
};
