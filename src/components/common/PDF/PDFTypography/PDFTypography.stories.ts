import type { Meta, StoryObj } from '@storybook/react';
import PDFTypography  from './PDFTypography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/PDF/PDFTypography',
  tags: ['autodocs'],
  component: PDFTypography,
} satisfies Meta<typeof PDFTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PDFTypographyBasic: Story = {
  args: {
    value: 'Error',
    fWeight: 'b',
    top: '0px',
    location: 'center',
    margin: '0px',
    fSize: '12px',
  },
};
