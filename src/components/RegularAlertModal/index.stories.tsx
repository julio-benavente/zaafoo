import type { Meta, StoryObj } from "@storybook/react";
import RegularAlertModal from "./index";
import { useState } from "react";
import { Button } from "..";

const meta: Meta<typeof RegularAlertModal> = {
  title: "Components/Regular Alert Modal",
  component: RegularAlertModal,
  argTypes: {
    variant: {
      type: "string",
      defaultValue: "info",
      options: ["info", "warning", "success", "error", "error-alt"],
      control: { type: "select" },
    },
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
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        saepe doloribus!
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof RegularAlertModal>;

const DefaultWithHooks = (props: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <div>
      <Button onClick={openModal}>Open menu modal</Button>
      <RegularAlertModal
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
      />
    </div>
  );
};

export const Default: Story = {
  render: (props) => {
    return <DefaultWithHooks {...props} />;
  },
};

export const TwoButtons: Story = {
  render: (props) => {
    return <TwoButtonsModalComponent {...props} />;
  },
};

const TwoButtonsModalComponent = ({ variant, ...props }: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <Button onClick={openModal}>Open menu modal</Button>
      <RegularAlertModal
        {...props}
        variant={variant}
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
      />
    </div>
  );
};

export const Info: Story = {
  render: (props) => {
    return <TwoButtonsModalComponent {...props} variant="info" />;
  },
};

export const Warning: Story = {
  render: (props) => {
    return <TwoButtonsModalComponent {...props} variant="warning" />;
  },
};

export const Success: Story = {
  render: (props) => {
    return <TwoButtonsModalComponent {...props} variant="success" />;
  },
};

export const Error: Story = {
  render: (props) => {
    return <TwoButtonsModalComponent {...props} variant="error" />;
  },
};

export const ErrorAlt: Story = {
  render: (props) => {
    return <TwoButtonsModalComponent {...props} variant="error-alt" />;
  },
};
