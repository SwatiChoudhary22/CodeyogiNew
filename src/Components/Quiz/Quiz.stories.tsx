import { ComponentMeta, ComponentStory } from "@storybook/react";
import Quiz from "./Quiz";

export default {
  title: "Quiz",
  component: Quiz,
  argTypes: {},
} as ComponentMeta<typeof Quiz>;

const Template: ComponentStory<typeof Quiz> = (args) => <Quiz {...args}></Quiz>;

// export const Logout = Template.bind({});
// Logout.args = {};
// export const Timer = Template.bind({});
// Timer.args = {};
// export const Welcome = Template.bind({});
// Timer.args = {};
