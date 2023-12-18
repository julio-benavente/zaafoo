import type { Meta, StoryObj } from "@storybook/react";
import CreatenewCategoryModal from "./CreateNewCategoryModal";
import { useState } from "react";
import { Button } from "@/components";

const meta: Meta<typeof CreatenewCategoryModal> = {
  title: "Pages/Single Menu Page/Create new category modal",
  component: CreatenewCategoryModal,
  parameters: {
    // layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof CreatenewCategoryModal>;

export const ModalOpen: Story = {
  render: (args) => {
    const [newCategoryModalIsOpen, setNewCategoryModalIsOpen] = useState(
      args.open
    );
    return (
      <div>
        <Button onClick={() => setNewCategoryModalIsOpen(true)}>
          Open Create Category Modal
        </Button>
        <CreatenewCategoryModal
          open={newCategoryModalIsOpen}
          setOpen={setNewCategoryModalIsOpen}
        />
      </div>
    );
  },
};
ModalOpen.args = {
  open: true,
};

export const ModalClose: Story = { ...ModalOpen };
ModalClose.args = {
  open: false,
};
