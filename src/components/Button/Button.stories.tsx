import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../..";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};
Primary.args = {
  children: "Button",
  variants: "primary",
  disabled: false,
};

export const Secondary: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};
Secondary.args = {
  ...Primary.args,
  variants: "secondary",
};

export const PrimaryDestructive: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};
PrimaryDestructive.args = {
  ...Primary.args,
  variants: "primary-destructive",
};

export const SecondaryDestructive: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};
SecondaryDestructive.args = {
  ...Primary.args,
  variants: "secondary-destructive",
};
