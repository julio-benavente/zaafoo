import type { Meta, StoryObj } from "@storybook/react";
import DeleteCategoryModal from "./index";
import { Button } from "@/components";
import { useState } from "react";

const meta: Meta<typeof DeleteCategoryModal> = {
  title: "Pages/Single Menu Page/Delete Category Modal",
  component: DeleteCategoryModal,
  args: {
    // category: "Desayunos",
  },
};

export default meta;

type Story = StoryObj<typeof DeleteCategoryModal>;

export const Default: Story = {
  render: (args, context) => {
    return <DeleteCategoryModal {...args} {...context} />;
  },
};

Default.decorators = [
  (Story) => {
    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen);
    return (
      <div>
        <Button onClick={() => setIsOpen(!isOpen)}>Open</Button>
        <Story open={isOpen} category="Desayuno" />
      </div>
    );
  },
];
