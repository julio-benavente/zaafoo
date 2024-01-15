// import MuiSnackbarContent from "@mui/material/SnackbarContent";
import cn from "@/helpers/cn";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { forwardRef } from "react";

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    default: true;
  }
}

const Snackbar = forwardRef(
  ({ className, classes, variant, color, ...props }: AlertProps, ref: any) => {
    return (
      <MuiAlert
        variant="outlined"
        ref={ref}
        color={color}
        classes={{
          ...classes,
          root: cn(
            "rounded-sm border-2  p-0 flex items-center w-full bg-white sm:w-md",
            color === "default" && "border-black",
            classes?.root
          ),
          message: cn("px-4 grow flex items-center", classes?.message),
          action: cn("py-1 px-4 m-0 self-center", classes?.action),
          icon: cn("px-3 py-3 text-black m-0 flex items-center self-stretch", [
            color === "default" && "bg-black text-white",
            color === "info" && "bg-blue-500",
            color === "warning" && "bg-orange-500",
            color === "success" && "bg-green-500",
            color === "error" && "bg-red-500",
            classes?.icon,
          ]),
          outlinedInfo: cn("border-blue-500", classes?.outlinedInfo),
          outlinedWarning: cn("border-orange-500", classes?.outlinedError),
          outlinedSuccess: cn("border-green-500", classes?.outlinedError),
          outlinedError: cn("border-red-500", classes?.outlinedError),
        }}
        {...props}
      />
    );
  }
);

Snackbar.displayName = "Snackbar";

export default Snackbar;
