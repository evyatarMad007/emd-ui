import type { Meta, StoryObj } from '@storybook/react';
import Form  from './Form';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/Form',
  tags: ['autodocs'],
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicForm: Story = {
  args: {
    isValidForm: true,
    submitButton: { value: "שמור", backgroundColor: "blue" },
    maxWidth: "400px",
    onSubmit: () => {},
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
};

export const SmallWidthForm: Story = {
  args: {
    isValidForm: true,
    submitButton: { value: "עדכן", backgroundColor: "#00a503" },
    maxWidth: "100px",
    onSubmit: () => {},
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
};
