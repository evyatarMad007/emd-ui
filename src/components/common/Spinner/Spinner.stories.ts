import type { Meta, StoryObj } from '@storybook/react';
import Spinner  from './Spinner';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/Spinner',
  tags: ['autodocs'],
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Big: Story = {
  args: {
    size: 'big',
  },
};
export const Small: Story = {
  args: {
    size: 'small',
  },
};
