import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Table from './Table';
import { TableProps } from './Table.types';


import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';


export default {
  title: 'Components/Table/MainTable',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    width: { control: 'text' },
    striped: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    responsive: { control: 'boolean' },
  },
} as Meta<typeof Table>;

const Template = (args: TableProps) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
      </TableRow>
    </TableHeader>

    <tbody>
      <TableRow>
        <TableCell>Row1-Col1</TableCell>
        <TableCell>Row1-Col2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row2-Col1</TableCell>
        <TableCell>Row2-Col2</TableCell>
      </TableRow>
      <TableRow disabled={args.disabled}>

        <TableCell>Row3-Col1 (Disabled test row?)</TableCell>
        <TableCell>Row3-Col2</TableCell>
      </TableRow>
    </tbody>

    <TableFooter>
      <TableRow>
        <TableCell colSpan={2}>Footer content here</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default: StoryObj<TableProps> = {
  render: Template,
  args: {
    disabled: false,
    backgroundColor: '#ffffff',
    width: '100%',
    striped: false,
    hoverable: false,
    responsive: false,
  },
};

export const Striped: StoryObj<TableProps> = {
  render: Template,
  args: {
    striped: true,
    hoverable: false,
    disabled: false,
    backgroundColor: '#ffffff',
  },
};

export const Hoverable: StoryObj<TableProps> = {
  render: Template,
  args: {
    hoverable: true,
    striped: false,
    disabled: false,
    backgroundColor: '#ffffff',
  },
};

export const Disabled: StoryObj<TableProps> = {
  render: Template,
  args: {
    disabled: true,
    striped: false,
    hoverable: false,
    backgroundColor: '#ffffff',
  },
};

export const ResponsiveAndStriped: StoryObj<TableProps> = {
  render: Template,
  args: {
    disabled: false,
    striped: true,
    hoverable: true,
    responsive: true,
    width: '800px', 
  },
};
