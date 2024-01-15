import type { Meta, StoryObj } from "@storybook/react";
import EditVariantModal from "./EditVariantModal";
import { useState } from "react";
import { Button } from "@/components";

const meta: Meta<typeof EditVariantModal> = {
  title: "Pages/Single Menu Page/Edit Variant Modal",
  component: EditVariantModal,
  parameters: {
    // layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof EditVariantModal>;

const ModalOpenWithHooks = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(true);
  const closeEditModal = () => setEditModalIsOpen(false);
  const onActionEditModal = () => {
    closeEditModal();
  };
  const onCloseEditModal = () => {
    closeEditModal();
  };
  return (
    <EditVariantModal
      open={editModalIsOpen}
      onAction={onActionEditModal}
      onClose={onCloseEditModal}
    />
  );
};

export const ModalOpen: Story = {
  render: () => {
    return <ModalOpenWithHooks />;
  },
};

const ModalCloseWithHooks = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const closeEditModal = () => setEditModalIsOpen(false);
  const onActionEditModal = () => {
    closeEditModal();
  };
  const onCloseEditModal = () => {
    closeEditModal();
  };
  return (
    <div>
      <Button onClick={() => setEditModalIsOpen(true)}>Open Edit Modal</Button>
      <EditVariantModal
        open={editModalIsOpen}
        onAction={onActionEditModal}
        onClose={onCloseEditModal}
      />
    </div>
  );
};

export const ModalClose: Story = {
  render: () => {
    return <ModalCloseWithHooks />;
  },
};
