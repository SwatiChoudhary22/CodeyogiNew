import { ComponentMeta, ComponentStory } from "@storybook/react";
import Lectures from "./Lectures";

export default {
  title: "Lectures",
  component: Lectures,
  argTypes: {},
} as ComponentMeta<typeof Lectures>;

const Template: ComponentStory<typeof Lectures> = (args) => (
  <Lectures {...args}></Lectures>
);

export const VariantName = Template.bind({});
VariantName.args = {};
export {};
