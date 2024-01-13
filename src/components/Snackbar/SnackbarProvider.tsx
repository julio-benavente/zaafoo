"use client";

import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";
import SnackbarContent from "./index";

const SnackProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      Components={{
        default: SnackbarContent,
        info: SnackbarContent,
        warning: SnackbarContent,
        error: SnackbarContent,
        success: SnackbarContent,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackProvider;
