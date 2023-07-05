import type { Meta, StoryObj } from '@storybook/react';
import PDFSectionListContainer  from './PDFSectionListContainer';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/PDF/PDFSectionListContainer',
  tags: ['autodocs'],
  component: PDFSectionListContainer,
} satisfies Meta<typeof PDFSectionListContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PDFSectionListContainerBasic: Story = {
  args: {
    listTitle: 'list title',
    sectionList: [],
  },
};
