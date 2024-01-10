import { Dispatch, SetStateAction } from "react";
import { GeneralTabDataProps } from "./GeneralTab";

export type MenuOptions = "menus" | "variants" | "settings";

export interface MenuOptionsProps {
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  variant: "create" | "update";
  closeModal?: () => void;
  categoryId: string;
  defaultData?: GeneralTabDataProps;
}

export type RequestState = "idle" | "loading" | "success" | "error";
