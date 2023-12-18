import {
  Button,
  SelectTabs,
  StandardModal,
  Tab,
  Tabs,
  Typography,
} from "@/components";
import MenuItem from "@/components/MenuItem";
import { Modal, SelectChangeEvent } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import VariantsTab from "./VariantsTab";
import GeneralTab from "./GeneralTab";
import SettingsTab from "./SettingsTab";
import MenuOptionsProvider from "./context";
import cn from "@/helpers/cn";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

type MenuOptions = "menus" | "variants" | "settings";

interface MenuOptionsProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuOptions = (props: MenuOptionsProps) => {
  const closeModal = () => {
    props.setOpen(false);
  };

  return (
    <Modal
      open={props.open}
      classes={{ backdrop: "bg-black/90" }}
      onClose={closeModal}
    >
      <MenuOptionsProvider>
        <div
          className={cn(
            "bg-white border-y border-black border-solid",
            "absolute outline-none",
            "w-full bottom-0 rounded-t-lg overflow-hidden",
            "sm:w-[calc(100%-10vw)] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-sm sm:bottom-auto sm:max-w-md"
          )}
        >
          <div className="py-3 px-5 border-b border-black grid grid-flow-col justify-between items-center gap-x-8 bg-pink-500">
            <Typography className="font-bold">Create a menu item</Typography>
            <CloseOutlinedIcon
              className="cursor-pointer"
              onClick={(e) => closeModal()}
            />
          </div>

          <div className="px-5 py-5">
            <GeneralTab closeModal={closeModal} />
            {/* {tabValue === "menus" && <GeneralTab />} */}
            {/* {tabValue === "variants" && <VariantsTab />} */}
            {/* {tabValue === "settings" && <SettingsTab />} */}
          </div>
        </div>
      </MenuOptionsProvider>
    </Modal>
  );
};

export default MenuOptions;

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
