import { Typography } from "@/components";
import { Modal } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import GeneralTab from "./GeneralTab";
import MenuOptionsProvider from "./context";
import cn from "@/helpers/cn";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export type MenuOptions = "menus" | "variants" | "settings";

export interface MenuOptionsProps {
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
          </div>
        </div>
      </MenuOptionsProvider>
    </Modal>
  );
};

export default MenuOptions;
