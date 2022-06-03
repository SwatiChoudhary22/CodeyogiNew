import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebar from "./Sidebar";

export default {
  title: "Sidebar",
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args}></Sidebar>
);

export const VariantName = Template.bind({});
VariantName.args = {};
