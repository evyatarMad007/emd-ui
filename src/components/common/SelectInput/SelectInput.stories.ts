import type { Meta, StoryObj } from '@storybook/react';
import SelectInput  from './SelectInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/SelectInput',
  tags: ['autodocs'],
  component: SelectInput,
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicSelect: Story = {
  args: {
    label: 'Select',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    defaultValue: '1',
  },
};

export const Disable: Story = {
  args: {
    label: 'Select',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    defaultValue: '1',
    disabled: true,
  },
};

export const DirectionRTL: Story = {
  args: {
    label: 'Select',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    defaultValue: '1',
    inpDir: 'rtl',
  },
};

export const DirectionLTR: Story = {
  args: {
    label: 'Select',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    defaultValue: '1',
    inpDir: 'ltr',
  },
};