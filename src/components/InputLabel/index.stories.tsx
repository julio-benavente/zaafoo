import type { Meta, StoryObj } from "@storybook/react";
import InputLabel from "./index";
import { TextField } from "..";

const meta: Meta<typeof InputLabel> = {
  title: "Components/Label",
  component: InputLabel,
};

export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {};
Default.args = {
  children: "This is an input label",
};

export const Examples: Story = {
  render: (a) => {
    return (
      <div className="grid gap-y-2">
        <InputLabel>This is an input label</InputLabel>
        <InputLabel required>This is a REQUIRED input label</InputLabel>
      </div>
    );
  },
};

export const WithTextField: Story = {
  render: () => {
    return (
      <div className="grid gap-y-2">
        <InputLabel htmlFor="name" required>
          This is an input label
        </InputLabel>
        <TextField name="name" placeholder="Type your name" />
      </div>
    );
  },
};
