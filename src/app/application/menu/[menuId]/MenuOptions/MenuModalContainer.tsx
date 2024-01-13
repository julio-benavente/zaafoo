import { Typography } from "@/components";
import { Modal } from "@mui/material";
import MenuOptionsProvider from "./context";
import cn from "@/helpers/cn";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { MenuOptionsProps } from "./types";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  children: ReactNode;
}

const MenuModalContainer = (props: IProps) => {
  return (
    <Modal
      open={props.open}
      classes={{ backdrop: "bg-black/90" }}
      onClose={props.onClose}
    >
      <div>
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
              <Typography className="font-bold">{props.title}</Typography>
              <CloseOutlinedIcon
                className="cursor-pointer"
                onClick={props.onClose}
              />
            </div>

            <div className="px-5 py-5">{props.children}</div>
          </div>
        </MenuOptionsProvider>
      </div>
    </Modal>
  );
};

export default MenuModalContainer;
