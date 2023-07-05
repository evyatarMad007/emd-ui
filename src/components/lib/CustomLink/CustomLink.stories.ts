import type { Meta, StoryObj } from '@storybook/react';
import CustomLink  from './CustomLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'common/CustomLink',
  tags: ['autodocs'],
  component: CustomLink,
} satisfies Meta<typeof CustomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SideBarCustomLink: Story = {
  args: {
    children: 'BasicCustomLink',
    linkType: "sideBar",
    onClick: () => console.log('onClick SideBarCustomLink'),
    classNameList: "SideBarCustomLink",
    href: "/",
  },
};

export const SubHeaderCustomLink: Story = {
  args: {
    children: 'BasicCustomLink',
    linkType: "subHeader",
    onClick: () => console.log('onClick SubHeaderCustomLink'),
    classNameList: "SubHeaderCustomLink",
    href: "/",
  },
};

export const SideBarSettingsCustomLink: Story = {
  args: {
    children: 'BasicCustomLink',
    linkType: "sideBarSettings",
    onClick: () => console.log('onClick SideBarSettingsCustomLink'),
    classNameList: "SideBarSettingsCustomLink",
    href: "/",
  },
};

export const LoginCustomLink: Story = {
  args: {
    children: 'BasicCustomLink',
    linkType: "login",
    onClick: () => console.log('onClick LoginCustomLink'),
    classNameList: "LoginCustomLink",
    href: "/",
  },
};

export const RegisterCustomLink: Story = {
  args: {
    children: 'BasicCustomLink',
    linkType: "register",
    onClick: () => console.log('onClick RegisterCustomLink'),
    classNameList: "RegisterCustomLink",
    href: "/",
  },
};

export const LogoImgCustomLink: Story = {
  args: {
    children: 'BasicCustomLink',
    linkType: "logoImg",
    onClick: () => console.log('onClick LogoImgCustomLink'),
    classNameList: "LogoImgCustomLink",
    href: "/",
  },
};


