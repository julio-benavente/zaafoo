import type { Meta, StoryObj } from "@storybook/react";
import RegularCloseButton from "./index";

const meta: Meta<typeof RegularCloseButton> = {
  title: "Components/Regular Close Button",
  component: RegularCloseButton,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof RegularCloseButton>;

export const Default: Story = {};
