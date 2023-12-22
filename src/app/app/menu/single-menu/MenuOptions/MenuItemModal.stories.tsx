import type { Meta, StoryObj } from "@storybook/react";
import CreateOrEditMenuItemModal from "./MenuItemModal";
import { Button } from "@/components";
import { useState } from "react";

const meta: Meta<typeof CreateOrEditMenuItemModal> = {
  title: "Pages/Single Menu Page/Menu Item Modal",
  component: CreateOrEditMenuItemModal,
  parameters: {
    // layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["create", "update"],
    },
  },
  args: {
    open: true,
    variant: "create",
  },
};

export default meta;

type Story = StoryObj<typeof CreateOrEditMenuItemModal>;

export const Default: Story = {
  render: (args) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    return (
      <div>
        <Button onClick={() => setModalIsOpen(true)}>Open</Button>
        <CreateOrEditMenuItemModal
          {...args}
          open={modalIsOpen}
          setOpen={setModalIsOpen}
        />
      </div>
    );
  },
};
