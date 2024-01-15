import type { Meta, StoryObj } from "@storybook/react";
import CategoryModal from ".";
import { useState } from "react";

const meta: Meta<typeof CategoryModal> = {
  title: "Pages/Single Menu Page/Category Modal",
  component: CategoryModal,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    variant: "create",
  },
};

export default meta;

type Story = StoryObj<typeof CategoryModal>;

export const Default: Story = {};

const CreateCategoryWithHook = (args: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <CategoryModal {...args} open={modalIsOpen} setOpen={setModalIsOpen} />
  );
};

export const CreateCategory: Story = {
  render: ({ ...args }) => {
    return <CreateCategoryWithHook {...args} />;
  },
};

const UpdateCategoryWithHooks = (args: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <CategoryModal
      {...args}
      categoryProps={{
        id: "66f4bce9-8521-4309-8dc8-8c54b71bb89e",
        name: "Desayunos",
      }}
      open={modalIsOpen}
      setOpen={setModalIsOpen}
    />
  );
};
export const UpdateCategory: Story = {
  render: ({ ...args }) => {
    return <UpdateCategoryWithHooks {...args} />;
  },
};

UpdateCategory.args = {
  variant: "update",
};
