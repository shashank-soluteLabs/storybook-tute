import Button from "../../Components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  className: "",
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