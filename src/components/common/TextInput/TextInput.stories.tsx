import type { Meta, StoryObj } from '@storybook/react';
import TextInput  from './TextInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/TextInput',
  tags: ['autodocs'],
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputBasic: Story = {
  args: {
    label: 'Text Input',
    fieldType: 'text',
    errorMessage: 'Error Message',
  },
};

export const Disable: Story = {
  args: {
    label: 'Text Input',
    fieldType: 'text',
    errorMessage: 'Error Message',
    disabled: true,
  },
};

export const DirectionLTR: Story = {
  args: {
    label: 'Text Input',
    fieldType: 'text',
    errorMessage: 'Error Message',
    inpDir: 'ltr',
  },
};

export const DirectionRTL: Story = {
  args: {
    label: 'אינפוט טקסט',
    fieldType: 'text',
    errorMessage: 'Error Message',
    inpDir: 'rtl',
  },
};




