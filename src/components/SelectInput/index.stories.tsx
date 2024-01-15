import type { Meta, StoryObj } from "@storybook/react";
import SelectInput from "./index";
import MenuItem from "../MenuItem";
import React, { ReactNode } from "react";
import { SelectChangeEvent } from "@mui/material";

const meta: Meta<typeof SelectInput> = {
  title: "Components/Select Input",
  component: SelectInput,
  // parameters: {
  // layout: "center",
  // },
};

export default meta;

type Story = StoryObj<typeof SelectInput>;

const DefaultWithHooks = () => {
  const [age, setAge] = React.useState<string>("");

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: ReactNode
  ) => {
    setAge(event.target.value as string);
  };
  return (
    <SelectInput value={age} onChange={handleChange}>
      <MenuItem value="">Select your age</MenuItem>
      <MenuItem value="pescado">Pescado</MenuItem>
      <MenuItem value="mariscos">Mariscos</MenuItem>
      <MenuItem value="polleria">Polleria</MenuItem>
    </SelectInput>
  );
};

export const Default: Story = {
  render: () => {
    return <DefaultWithHooks />;
  },
};
