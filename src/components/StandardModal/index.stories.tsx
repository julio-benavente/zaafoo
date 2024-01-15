import type { Meta, StoryObj } from "@storybook/react";
import StandardModal from "./index";
import { useState } from "react";
import { Button } from "..";

const meta: Meta<typeof StandardModal> = {
  title: "Components/Standard modal",
  component: StandardModal,
  argTypes: {
    size: {
      type: "string",
      defaultValue: "md",
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
  parameters: {
    // layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof StandardModal>;

const DefaultWithHooks = (props: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <div>
      <Button onClick={openModal}>Open menu modal</Button>
      <StandardModal
        {...props}
        open={modalIsOpen}
        title="Create a new menu"
        onClose={closeModal}
        primaryButtonProps={{
          label: "Create a menu",
          onClick: () => {
            console.log("Create menu");
            closeModal();
          },
        }}
      >
        <p></p>
      </StandardModal>
    </div>
  );
};

export const Default: Story = {
  render: (props) => {
    return <DefaultWithHooks {...props} />;
  },
};

const TwoButtonsWithHook = (props: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <div>
      <Button onClick={openModal}>Open menu modal</Button>
      <StandardModal
        {...props}
        open={modalIsOpen}
        title="Create a new menu"
        onClose={closeModal}
        primaryButtonProps={{
          label: "Create a menu",
          onClick: () => {
            console.log("Create menu");
            closeModal();
          },
        }}
        secondaryButtonProps={{
          label: "Cancel",
          onClick: () => {
            console.log("Cancel menu creation");
            closeModal();
          },
        }}
      >
        <p></p>
      </StandardModal>
    </div>
  );
};

export const TwoButtons: Story = {
  render: (props) => {
    return <TwoButtonsWithHook {...props} />;
  },
};
