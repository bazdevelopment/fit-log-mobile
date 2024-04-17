import { Meta, StoryFn } from "@storybook/react";

import Label from ".";

export default {
  title: "components/Label",
  component: Label,
} as Meta<typeof Label>;

export const Basic: StoryFn<typeof Label> = (args: JSX.IntrinsicAttributes) => (
  <Label labelText="First Label" {...args} />
);

Basic.args = {
  additionalLabelStyle: { fontSize: 15 },
};
