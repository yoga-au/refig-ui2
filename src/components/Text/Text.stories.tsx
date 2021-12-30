import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "../..";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

// DOCS NOTE:
// Remind user about default props value, especially color properties

export const LightBackground: ComponentStory<typeof Text> = (args) => {
  return (
    <>
      <div style={{ padding: "1em" }}>
        <Text {...args} />
      </div>
    </>
  );
};

LightBackground.args = {
  variants: "UI11",
  weight: "normal",
  isInverse: false,
  children: "UI Text",
};

export const DarkBackground: ComponentStory<typeof Text> = (args) => {
  return (
    <>
      <div style={{ backgroundColor: "black", padding: "1em" }}>
        <Text {...args} style={{ color: "white" }} />
      </div>
    </>
  );
};

DarkBackground.args = {
  ...LightBackground.args,
  isInverse: true,
};
