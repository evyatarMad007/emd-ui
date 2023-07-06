import type { Meta, StoryObj } from '@storybook/react';
import Button  from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/Button',
  tags: ['autodocs'],
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// contained
export const DefaultContained: Story = {
  args: {
    children: 'contained default',
    color: 'default',
    variant: 'contained',
  },
};

export const PrimaryContained: Story = {
  args: {
    children: 'contained primary',
    color: 'primary',
    variant: 'contained',
  },
};

export const SecondaryContained: Story = {
  args: {
    children: 'contained secondary',
    color: 'secondary',
    variant: 'contained',
  },
};

export const SuccussContained: Story = {
  args: {
    children: 'contained success',
    color: 'success',
    variant: 'contained',
  },
};

export const ErrorContained: Story = {
  args: {
    children: 'contained error',
    color: 'error',
    variant: 'contained',
  },
};

// outlined
export const DefaultOutlined: Story = {
  args: {
    children: 'outlined default',
    color: 'default',
    variant: 'outlined',
  },
};

export const PrimaryOutlined: Story = {
  args: {
    children: 'outlined primary',
    color: 'primary',
    variant: 'outlined',
  },
};

export const SecondaryOutlined: Story = {
  args: {
    children: 'outlined secondary',
    color: 'secondary',
    variant: 'outlined',
  },
};

export const ExaitedOutlined: Story = {
  args: {
    children: 'outlined secondary',
    color: 'secondary',
    variant: 'outlined',
  },
};

export const SuccussOutlined: Story = {
  args: {
    children: 'outlined success',
    color: 'success',
    variant: 'outlined',
  },
};

export const ErrorOutlined: Story = {
  args: {
    children: 'outlined error',
    color: 'error',
    variant: 'outlined',
  },
};

export const Disable: Story = {
  args: {
    children: 'Disable',
    color: 'error',
    variant: 'contained',
    disable: true,
  },
};







