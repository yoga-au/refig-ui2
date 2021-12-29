import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "../..";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

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
      <div style={{ backgroundColor: "black", color: "white", padding: "1em" }}>
        <Text {...args} />
      </div>
    </>
  );
};

DarkBackground.args = {
  ...LightBackground.args,
  isInverse: true,
};
