import type { Meta, StoryObj } from '@storybook/react';
import ExitBtn  from './ExitBtn';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'static/ExitBtn',
  tags: ['autodocs'],
  component: ExitBtn,
} satisfies Meta<typeof ExitBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Exit: Story = {
  args: {
    onClick: () => console.log('ExitBtn Clicked!'),
  },
};
