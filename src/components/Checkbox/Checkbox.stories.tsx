import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox, Label } from "../..";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <div style={{ width: "400px" }}>
      <Checkbox {...args} />
    </div>
  );
};
Default.args = {
  disabled: false,
  id: "unique",
  isInverse: false,
  label: "Checkbox Label",
  description: "",
};

export const WithDescription: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <div style={{ width: "400px" }}>
      <Checkbox {...args} />
    </div>
  );
};
WithDescription.args = {
  ...Default.args,
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis ex, quibusdam deserunt doloribus velit voluptatum non repudiandae laborum sunt.",
};
