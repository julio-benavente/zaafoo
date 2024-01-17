import type { Meta, StoryObj, Decorator } from "@storybook/react";
import EditMenuModal from "./EditMenuModal";
import { ReactNode, useState } from "react";
import { Button } from "@/components";
import { Toggle } from "@/helpers/decorators";

const meta: Meta<typeof EditMenuModal> = {
  title: "Pages/Menu/Edit Menu Modal",
  component: EditMenuModal,
  args: {
    data: {
      name: "The Daily Menu",
    },
  },
  decorators: [Toggle],
};

export default meta;

type Story = StoryObj<typeof EditMenuModal>;

export const Default: Story = {
  render: (args, context) => {
    return (
      <EditMenuModal {...args} open={context.open} setOpen={context.setOpen} />
    );
  },
};
