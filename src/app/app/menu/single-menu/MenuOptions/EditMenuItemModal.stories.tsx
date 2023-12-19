import type { Meta, StoryObj } from "@storybook/react";
import EditMenuItemModal from "./EditMenuItemModal";
import { Button } from "@/components";
import { useState } from "react";

const meta: Meta<typeof EditMenuItemModal> = {
  title: "Pages/Single Menu Page/Edit Menu Item Modal",
  component: EditMenuItemModal,
  parameters: {
    // layout: "fullscreen",
  },
  args: {
    open: true,
  },
};

export default meta;

type Story = StoryObj<typeof EditMenuItemModal>;

export const Default: Story = {
  render: (args) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    return (
      <div>
        <Button onClick={() => setModalIsOpen(true)}>Open</Button>
        <EditMenuItemModal
          {...args}
          open={modalIsOpen}
          setOpen={setModalIsOpen}
        />
      </div>
    );
  },
};
