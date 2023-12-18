import type { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./index";

const meta: Meta<typeof MenuItem> = {
  title: "Components/Menu Item",
  component: MenuItem,
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const SelectVariant: Story = {
  render: () => {
    return (
      <div>
        <MenuItem>Pescado</MenuItem>
        <MenuItem>Tocino</MenuItem>
        <MenuItem>Yuca</MenuItem>
        <MenuItem>Margarina</MenuItem>
      </div>
    );
  },
};

export const TabVariant: Story = {
  render: () => {
    return (
      <div>
        <MenuItem variant="tab">Pescado</MenuItem>
        <MenuItem variant="tab">Yuca</MenuItem>
        <MenuItem variant="tab">Tocino</MenuItem>
        <MenuItem variant="tab">Margarina</MenuItem>
      </div>
    );
  },
};

export const OptionVariant: Story = {
  render: () => {
    return (
      <div>
        <MenuItem variant="option">Pescado</MenuItem>
        <MenuItem variant="option">Yuca</MenuItem>
        <MenuItem variant="option">Tocino</MenuItem>
        <MenuItem variant="option">Margarina</MenuItem>
      </div>
    );
  },
};
