import React from "react";
import { Tab, Tabs, Typography } from "@/components";
import MenuTabs from "./MenuTabs";
import Main from "./Main";

const MenuPage = () => {
  return (
    <div className="py-6 h-full">
      <div className="px-6 border-b border-black mb-4">
        <Typography variant="h2" component="h1">
          Menus
        </Typography>
      </div>
      <Main />
    </div>
  );
};

export default MenuPage;
