"use client";

import { Tab, Tabs } from "@/components";
import React from "react";
import SettingsSection from "./SettingsSection";
import MenuSection from "./MenuSection";

const Main = () => {
  const [tabValue, setTabValue] = React.useState("menus");
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <div className="px-6">
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        className="mb-4"
      >
        <Tab label="Menus" value="menus" />
        <Tab label="Settings" value="settings" />
      </Tabs>
      {tabValue === "menus" && <MenuSection />}
      {tabValue === "settings" && <SettingsSection />}
    </div>
  );
};

export default Main;
