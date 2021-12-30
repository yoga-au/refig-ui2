import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label } from "../..";

export default {
  title: "Label",
  component: Label,
} as ComponentMeta<typeof Label>;

export const Default: ComponentStory<typeof Label> = (args) => {
  return <Label {...args} />;
};
Default.args = {
  children: "Label Example",
  weight: "normal",
  isInverse: false,
};

//TODO: Add example with input
