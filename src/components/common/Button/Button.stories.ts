import type { Meta, StoryObj } from '@storybook/react';
import Button  from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Error: Story = {
  args: {
    // style: { color: 'red'},
    children: 'Error',
  },
};

export const Secondary: Story = {
  args: {
    // style: { color: '#3d7aff'},
    children: 'Secondary',
  },
};

export const Succuss: Story = {
  args: {
    // style: { color: '#6afb8f'},
    children: 'Succuss',
  },
};

export const Disable: Story = {
  args: {
    disable: true,
    children: 'Disable',
  },
};
