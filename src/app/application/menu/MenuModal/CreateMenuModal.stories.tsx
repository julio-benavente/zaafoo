import type { Meta, StoryObj } from "@storybook/react";
import CreateMenuModal from "./CreateMenuModal";
import { useState } from "react";

const meta: Meta<typeof CreateMenuModal> = {
  title: "Pages/Menu/Create Menu Modal",
  component: CreateMenuModal,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof CreateMenuModal>;

const DefaultStory = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return <CreateMenuModal open={modalIsOpen} setOpen={setModalIsOpen} />;
};

export const Default: Story = {
  render: () => <DefaultStory />,
};
