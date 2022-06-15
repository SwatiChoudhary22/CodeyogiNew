import { ComponentMeta, ComponentStory } from "@storybook/react";
import Profile from "./Profile";

export default {
  title: "Profile",
  component: Profile,
  argTypes: {},
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args}></Profile>
);

export const VariantName = Template.bind({});
VariantName.args = {};
export {};
