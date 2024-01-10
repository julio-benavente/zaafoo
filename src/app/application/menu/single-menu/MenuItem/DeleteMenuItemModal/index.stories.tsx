import type { Meta, StoryObj } from "@storybook/react";
import DeleteMenuItemModal from "./index";
import { Button } from "@/components";

const meta: Meta<typeof DeleteMenuItemModal> = {
  title: "Pages/Single Menu Page/Delete Menu Item Modal",
  component: DeleteMenuItemModal,
  args: {
    category: "Breakfast",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof DeleteMenuItemModal>;

export const Default: Story = {};

const ToggleDecorator = () => {
  return (
    <div>
      <Button>Open</Button>
    </div>
  );
};
