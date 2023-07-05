import type { Meta, StoryObj } from '@storybook/react';
import HamburgerBtn  from './HamburgerBtn';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'static/HamburgerBtn',
  tags: ['autodocs'],
  component: HamburgerBtn,
} satisfies Meta<typeof HamburgerBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
  args: {
    onclick: () => {},
    whiteColor: true,
  },
};

export const Dark: Story = {
  args: {
    onclick: () => {},
    whiteColor: false,
  },
};
