import type { Meta, StoryObj } from '@storybook/react';
import Icon  from './Icon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'icons/Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Remove: Story = {
  args: {
    iconType: 'remove',
  },
};

export const Add: Story = {
  args: {
    iconType: 'add',
  },
};

