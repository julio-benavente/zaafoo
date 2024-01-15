import type { Meta, StoryObj } from "@storybook/react";
import MenuItemModal from "./MenuItemModal";
import { Button } from "@/components";
import { useState } from "react";

const meta: Meta<typeof MenuItemModal> = {
  title: "Pages/Single Menu Page/Menu Item Modal",
  component: MenuItemModal,
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

type Story = StoryObj<typeof MenuItemModal>;

const DefaultWithHooks = (args: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div>
      <Button onClick={() => setModalIsOpen(true)}>Open</Button>
      <MenuItemModal {...args} open={modalIsOpen} setOpen={setModalIsOpen} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => {
    return <DefaultWithHooks {...args} />;
  },
};
