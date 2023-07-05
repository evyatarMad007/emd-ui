import type { Meta, StoryObj } from '@storybook/react';
import PDFDocument  from './PDFDocument';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'lib/PDFDocument',
  tags: ['autodocs'],
  component: PDFDocument,
} satisfies Meta<typeof PDFDocument>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PDFDocumentBasic: Story = {
  args: {
    content: [
      "Page 1",
      "Page 2",
      "Page 3",
    ],
    pageAmount: 1,
  },
};
