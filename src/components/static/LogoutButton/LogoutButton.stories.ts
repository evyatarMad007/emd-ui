import type { Meta, StoryObj } from '@storybook/react';
import LogoutButton  from './LogoutButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'static/LogoutButton',
  tags: ['autodocs'],
  component: LogoutButton,
} satisfies Meta<typeof LogoutButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const logoutButton: Story = {
  args: {},
};
