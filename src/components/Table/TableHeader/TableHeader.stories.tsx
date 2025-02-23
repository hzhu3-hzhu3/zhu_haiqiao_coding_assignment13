import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader';
import { TableHeaderProps } from './TableHeader.types';

export default {
  title: 'Components/Table/TableHeader',
  component: TableHeader,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableHeader>;

const Template = (args: TableHeaderProps) => (
  <table>
    <TableHeader {...args}>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </TableHeader>
  </table>
);

export const Default: StoryObj<TableHeaderProps> = {
  render: Template,
  args: { disabled: false },
};

export const Disabled: StoryObj<TableHeaderProps> = {
  render: Template,
  args: { disabled: true },
};
