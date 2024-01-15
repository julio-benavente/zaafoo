import type { Meta, StoryObj } from "@storybook/react";
import SelectTabs from "./index";
import MenuItem from "../MenuItem";
import React, { ReactNode } from "react";
import { SelectChangeEvent } from "@mui/material";

const meta: Meta<typeof SelectTabs> = {
  title: "Components/Select Tabs",
  component: SelectTabs,
  //   parameters: {
  //     layout: "fullscreen",
  //   },
};

export default meta;

type Story = StoryObj<typeof SelectTabs>;

const DefaultWithHooks = () => {
  const [age, setAge] = React.useState<string>("pescado");

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: ReactNode
  ) => {
    setAge(event.target.value as string);
  };
  return (
    <SelectTabs value={age} onChange={handleChange}>
      <MenuItem variant="tab" value="pescado">
        Pescado
      </MenuItem>
      <MenuItem variant="tab" value="mariscos">
        Mariscos
      </MenuItem>
      <MenuItem variant="tab" value="polleria">
        Polleria
      </MenuItem>
    </SelectTabs>
  );
};

export const Default: Story = {
  render: () => {
    return <DefaultWithHooks />;
  },
};
