import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "../../index";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const NormalWeight: ComponentStory<typeof Text> = (args) => {
  return (
    <>
      <div>
        <Text {...args}>UI 11 Text</Text>
      </div>
      <div>
        <Text variants="UI12" {...args}>
          UI 12 Text
        </Text>
      </div>
      <div>
        <Text variants="UI13" {...args}>
          UI 13 Text
        </Text>
      </div>
      <div>
        <Text variants="UI14" {...args}>
          UI 14 Text
        </Text>
      </div>
    </>
  );
};

export const MediumWeight: ComponentStory<typeof Text> = (args) => {
  return (
    <>
      <div>
        <Text weight="medium" {...args}>
          UI 11 Text
        </Text>
      </div>
      <div>
        <Text variants="UI12" weight="medium" {...args}>
          UI 12 Text
        </Text>
      </div>
      <div>
        <Text variants="UI13" weight="medium" {...args}>
          UI 13 Text
        </Text>
      </div>
      <div>
        <Text variants="UI14" weight="medium" {...args}>
          UI 14 Text
        </Text>
      </div>
    </>
  );
};
