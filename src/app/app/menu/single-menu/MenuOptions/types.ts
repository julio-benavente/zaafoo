import { Dispatch, SetStateAction } from "react";

export type MenuOptions = "menus" | "variants" | "settings";

export interface MenuOptionsProps {
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  variant: "create" | "update";
  closeModal?: () => void;
  categoryId: string;
}

export type RequestState = "idle" | "loading" | "success" | "error";
