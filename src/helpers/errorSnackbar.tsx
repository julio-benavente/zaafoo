import { ReactNode } from "react";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { v4 } from "uuid";
import { RegularCloseButton } from "@/components";

const errorSnackbar = (label: string) => {
  const id = v4();

  enqueueSnackbar({
    color: "error",
    children: label,
    id,
    action: (
      <RegularCloseButton
        onClick={() => {
          closeSnackbar(id);
        }}
      />
    ),
  });
};

export default errorSnackbar;
