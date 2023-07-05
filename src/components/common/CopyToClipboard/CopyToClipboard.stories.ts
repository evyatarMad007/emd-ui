import type { Meta, StoryObj } from '@storybook/react';
import CopyToClipboard  from './CopyToClipboard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/CopyToClipboard',
  tags: ['autodocs'],
  component: CopyToClipboard,
} satisfies Meta<typeof CopyToClipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const copyToClipboard: Story = {
  args: {
    text: 'Copy to clipboard',
    children: 'Copy to clipboard',
  },
};
