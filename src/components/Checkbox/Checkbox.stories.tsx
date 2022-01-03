import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox, Label } from "../..";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args} />;
};
Default.args = {
  disabled: true,
};
