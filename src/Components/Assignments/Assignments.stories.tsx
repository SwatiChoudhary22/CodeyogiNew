import { ComponentMeta, ComponentStory } from "@storybook/react";
import Assignments from "./Assignments";

export default {
  title: "Assignments",
  component: Assignments,
  argTypes: {},
} as ComponentMeta<typeof Assignments>;

const Template: ComponentStory<typeof Assignments> = (args) => (
  <Assignments {...args}></Assignments>
);

export const VariantName = Template.bind({});
VariantName.args = {};
