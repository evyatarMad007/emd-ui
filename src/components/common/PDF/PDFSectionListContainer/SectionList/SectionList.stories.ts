import type { Meta, StoryObj } from '@storybook/react';
import SectionList  from './SectionList';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/PDF/SectionList',
  tags: ['autodocs'],
  component: SectionList,
} satisfies Meta<typeof SectionList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SectionListBasic: Story = {
  args: {
    list: ["item 1", "item 2", "item 3"],
  },
};
