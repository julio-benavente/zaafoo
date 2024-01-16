import type { Meta, StoryObj } from "@storybook/react";
import MenuModal from "./index";

const meta: Meta<typeof MenuModal> = {
  title: "Pages/Menu/Menu Modal",
  component: MenuModal,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof MenuModal>;

export const Default: Story = {};
