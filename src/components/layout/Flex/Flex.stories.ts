import type { Meta, StoryObj } from '@storybook/react';
import Flex  from './Flex';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'Layout/Flex',
  tags: ['autodocs'],
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FlexColumn: Story = {
  args: {
    flexDir: 'column',
    flexX: 'center',
    flexY: 'center',
    children: `<div>Child 1</div><div>Child 2</div><div>Child 3</div>`,
  },
};

export const FlexRow: Story = {
  args: {
    flexDir: 'row',
    flexX: 'center',
    flexY: 'center',
    children: `<div>Child 1</div><div>Child 2</div><div>Child 3</div>`,
  },
};