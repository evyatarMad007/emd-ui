import type { Meta, StoryObj } from '@storybook/react';
import Popper  from './Popper';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/Popper',
  tags: ['autodocs'],
  component: Popper,
} satisfies Meta<typeof Popper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TopLeft: Story = {
  args: {
    children: 'TopLeft',
    positionY: "top",
    positionX: "left",
  },
};

export const TopCenter: Story = {
  args: {
    children: 'TopCenter',
    positionY: "top",
    positionX: "center",
  },
};

export const TopRight: Story = {
  args: {
    children: 'TopRight',
    positionY: "top",
    positionX: "right",
  },
};

export const BottomLeft: Story = {
  args: {
    children: 'BottomLeft',
    positionY: "bottom",
    positionX: "left",
  },
};

export const BottomCenter: Story = {
  args: {
    children: 'BottomCenter',
    positionY: "bottom",
    positionX: "center",
  },
};

export const BottomRight: Story = {
  args: {
    children: 'BottomRight',
    positionY: "bottom",
    positionX: "right",
  },
};


