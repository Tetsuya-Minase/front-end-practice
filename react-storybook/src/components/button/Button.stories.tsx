import { Button, Props } from "./Button";
import { Meta } from "@storybook/react";

const ButtonType = {
  primary: "primary",
  warning: "warning",
  alert: "alert",
  default: "default",
};

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: { control: { type: "text" } },
    type: { control: { type: "select" } },
  },
  args: {
    text: "サンプル",
    type: "default",
  },
} as Meta;

const Template = (props: Props) => {
  return <Button {...props} />;
};
export const Default = Template.bind({});
