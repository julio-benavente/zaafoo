import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "This is a button",
    variant: "contained",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {};
Disabled.args = {
  disabled: true,
};

export const Outlined: Story = {};
Outlined.args = {
  variant: "outlined",
};
export const TwoButtons = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </div>
    );
  },
};

export const TwoButtonsDisabled = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Button variant="outlined" disabled>
          Outlined
        </Button>
        <Button variant="contained" disabled>
          Contained
        </Button>
      </div>
    );
  },
};
