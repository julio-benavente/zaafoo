import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "This is a button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
