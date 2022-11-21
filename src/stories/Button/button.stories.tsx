import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "../../Components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  className: " ",
  label: "Primary",
  backgroundColor: "primary",
  rounded: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  className: "",
  label: "Secondary",
  backgroundColor: "secondary",
  rounded: true,
};

export const Danger = Template.bind({});

Danger.args = {
  className: "",
  label: "Danger",
  backgroundColor: "danger",
  rounded: true,
};

export const Success = Template.bind({});

Success.args = {
  className: "",
  label: "Success",
  backgroundColor: "success",
  rounded: false,
};
