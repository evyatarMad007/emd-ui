import type { Meta, StoryObj } from '@storybook/react';
import Float  from './Float';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'Layout/Float',
  tags: ['autodocs'],
  component: Float,
} satisfies Meta<typeof Float>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Absolute: Story = {
  args: {
    position: 'absolute',
    location: [10, 0, 0, 10],
    children: `<div>Child 1</div><div>Child 2</div><div>Child 3</div>`,
  },
};

export const Fixed: Story = {
  args: {
    position: 'fixed',
    location: [25, 0, 0, 25],
    children: `<div>Child 1</div><div>Child 2</div><div>Child 3</div>`,
  },
};