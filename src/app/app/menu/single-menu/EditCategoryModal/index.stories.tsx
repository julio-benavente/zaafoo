import type { Meta, StoryObj } from "@storybook/react";
import EditCategoryModal from ".";
import { useState } from "react";
import { Button } from "@/components";

const meta: Meta<typeof EditCategoryModal> = {
  title: "Pages/Single Menu Page/Edit new category modal",
  component: EditCategoryModal,
  parameters: {
    // layout: "fullscreen",
  },
  args: {
    data: {
      name: "For Breakfast",
    },
  },
};

export default meta;

type Story = StoryObj<typeof EditCategoryModal>;

export const ModalOpen: Story = {
  render: ({ open, setOpen, ...args }) => {
    const [newCategoryModalIsOpen, setNewCategoryModalIsOpen] = useState(open);
    return (
      <div>
        <Button onClick={() => setNewCategoryModalIsOpen(true)}>
          Open Edit Category Modal
        </Button>
        <EditCategoryModal
          open={newCategoryModalIsOpen}
          setOpen={setNewCategoryModalIsOpen}
          {...args}
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
