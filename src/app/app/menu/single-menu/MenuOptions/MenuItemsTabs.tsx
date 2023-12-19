import { SelectTabs, Tab, Tabs } from "@/components";
import MenuItem from "@/components/MenuItem";
import { SelectChangeEvent } from "@mui/material";
import React from "react";
import { MenuOptions } from "./types";

const MenuItemTabs = () => {
  const [tabValue, setTabValue] = React.useState<MenuOptions>("menus");
  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: MenuOptions
  ) => {
    setTabValue(newValue);
  };

  const handleSelectChange = (
    event: SelectChangeEvent<unknown>
    // child: ReactNode
  ) => {
    setTabValue(event.target.value as MenuOptions);
  };
  return (
    <>
      <SelectTabs
        value={tabValue}
        onChange={handleSelectChange}
        className="sm:hidden mb-4"
      >
        <MenuItem variant="tab" value="menus">
          Menus
        </MenuItem>
        <MenuItem variant="tab" value="variants">
          Variants
        </MenuItem>
        <MenuItem variant="tab" value="settings">
          Settings
        </MenuItem>
      </SelectTabs>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="scrollable prevent tabs example"
        className="mb-4 hidden sm:block"
      >
        <Tab label="Menus" value="menus" />
        <Tab label="Variants" value="variants" />
        <Tab label="Advanced settings" value="settings" />
      </Tabs>
    </>
  );
};
