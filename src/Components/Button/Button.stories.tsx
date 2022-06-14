import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args}>Button1</Button>
);

export const Primary = Template.bind({});

Primary.args = {
  theme: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: "secondary",
};
