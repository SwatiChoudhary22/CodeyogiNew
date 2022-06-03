import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Header",
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}></Header>
);

export const VariantName = Template.bind({});
VariantName.args = {};
