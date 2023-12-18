import type { Meta, StoryObj } from "@storybook/react";
import SelectFreeSolo from "./index";

const meta: Meta<typeof SelectFreeSolo> = {
  title: "Components/Select Free Solo",
  component: SelectFreeSolo,
  parameters: {
    // layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof SelectFreeSolo>;

export const Default: Story = {};
