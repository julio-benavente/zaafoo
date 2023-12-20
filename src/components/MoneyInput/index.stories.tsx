import type { Meta, StoryObj } from "@storybook/react";
import MoneyInput from "./index";

const meta: Meta<typeof MoneyInput> = {
  title: "Components/MoneyInput",
  component: MoneyInput,
  parameters: {
    // layout: "fullscreen",
  },
  args: {
    textFieldProps: {
      placeholder: "$ 0.00",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MoneyInput>;

export const Default: Story = {};
