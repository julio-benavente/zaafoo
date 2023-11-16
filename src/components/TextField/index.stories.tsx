import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./index";
// import { InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { InputAdornment } from "@/components";

const meta: Meta<typeof TextField> = {
  title: "Components/Text Field",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const AddornmentEnd: Story = {};
AddornmentEnd.args = {
  InputProps: {
    endAdornment: (
      <InputAdornment position="end">
        <AccountCircle />
      </InputAdornment>
    ),
  },
};

export const AddornmentStart: Story = {};
AddornmentStart.args = {
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    ),
  },
};

export const AddornmentStartAndEnd: Story = {};
AddornmentStartAndEnd.args = {
  InputProps: {
    endAdornment: (
      <InputAdornment position="end">
        <AccountCircle />
      </InputAdornment>
    ),
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    ),
  },
};
