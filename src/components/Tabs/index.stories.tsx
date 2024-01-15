import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./index";
import Tab from "../Tab";
import React from "react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  // parameters: {
  // layout: "fullscreen",
  // },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const DefaultWithHooks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons={false}
      aria-label="scrollable prevent tabs example"
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
      <Tab label="Item Four" />
    </Tabs>
  );
};

export const Default: Story = {
  render: () => <DefaultWithHooks />,
};
