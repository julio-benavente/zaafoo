import { Dispatch, ReactNode, SetStateAction } from "react";

export type MenuOptions = "menus" | "variants" | "settings";

export interface MenuOptionsProps {
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}

export type RequestState = "idle" | "loading" | "success" | "error";
