import type { Meta, StoryObj } from "@storybook/react";
import CreateMenuItemModal from "./CreateMenuItemModal";
import { Button } from "@/components";
import { useState } from "react";

const meta: Meta<typeof CreateMenuItemModal> = {
  title: "Pages/Single Menu Page/Create Menu Item Modal",
  component: CreateMenuItemModal,
  parameters: {
    // layout: "fullscreen",
  },
  args: {
    open: true,
  },
};

export default meta;

type Story = StoryObj<typeof CreateMenuItemModal>;

export const Default: Story = {
  render: (args) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    return (
      <div>
        <Button onClick={() => setModalIsOpen(true)}>Open</Button>
        <CreateMenuItemModal
          {...args}
          open={modalIsOpen}
          setOpen={setModalIsOpen}
        />
      </div>
    );
  },
};
