import type { Meta, StoryObj } from '@storybook/react';
import SectionItem  from './SectionItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/PDF/SectionItem',
  tags: ['autodocs'],
  component: SectionItem,
} satisfies Meta<typeof SectionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SectionItemBasic: Story = {
  args: {
    section: {
      name: 'section name',
      number: 1,
      content: 'section content',
    },
  },
};
