import type { Meta, StoryObj } from '@storybook/react';
import SpinnerScreen  from './SpinnerScreen';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/SpinnerScreen',
  tags: ['autodocs'],
  component: SpinnerScreen,
} satisfies Meta<typeof SpinnerScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const spinnerScreen: Story = {
  args: {
    spinnerScreenState: true,
  },
};
