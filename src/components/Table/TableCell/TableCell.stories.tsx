import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TableCell from './TableCell';
import { TableCellProps } from './TableCell.types';

export default {
  title: 'Components/Table/TableCell',
  component: TableCell,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableCell>;

export const Default: StoryObj<TableCellProps> = {
  args: {
    disabled: false,
    children: 'Cell Content',
  },
};

export const Disabled: StoryObj<TableCellProps> = {
  args: {
    disabled: true,
    children: 'Disabled Cell',
  },
};
