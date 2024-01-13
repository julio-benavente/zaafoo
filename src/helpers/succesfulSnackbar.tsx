"use client";

import { ReactNode } from "react";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { v4 } from "uuid";
import { RegularCloseButton } from "@/components";

const succesfullSnackbar = (label: ReactNode) => {
  const id = v4();
  enqueueSnackbar({
    color: "success",
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

export default succesfullSnackbar;
