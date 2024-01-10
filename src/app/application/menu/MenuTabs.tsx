import { Tab, Tabs } from "@/components";
import React from "react";

const MenuTabs = () => {
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
      className="mb-4"
    >
      <Tab label="Menus" />
      <Tab label="Settings" />
    </Tabs>
  );
};

export default MenuTabs;
