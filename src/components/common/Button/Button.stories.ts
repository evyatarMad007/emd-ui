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
    color: 'red',
    fz: '20px',
    children: 'Error',
  },
};

export const Secondary: Story = {
  args: {
    color: '#3d7aff',
    fz: '20px',
    children: 'Secondary',
  },
};

export const Succuss: Story = {
  args: {
    color: '#8ee88b',
    fz: '20px',
    children: 'Succuss',
  },
};

export const Large: Story = {
  args: {
    color: '#898989',
    fz: '25px',
    children: 'Large',
  },
};

export const Small: Story = {
  args: {
    color: '#898989',
    fz: '15px',
    children: 'Small',
  },
};
