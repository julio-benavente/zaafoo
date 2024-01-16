import type { Meta, StoryObj } from "@storybook/react";
import EditMenuModal from "./EditMenuModal";
import { useState } from "react";

const meta: Meta<typeof EditMenuModal> = {
  title: "Pages/Menu/Edit Menu Modal",
  component: EditMenuModal,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof EditMenuModal>;

const DefaultStory = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return <EditMenuModal open={modalIsOpen} setOpen={setModalIsOpen} />;
};

export const Default: Story = {
  render: () => <DefaultStory />,
};
