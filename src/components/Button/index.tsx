import React from "react";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import cn from "@/helpers/cn";

const Button = (props: ButtonProps) => {
  return (
    <MuiButton
      disableRipple
      variant="contained"
      color="primary"
      size="medium"
      type="button"
      classes={{
        root: cn(
          "relative normal-case rounded-sm border border-black border border-solid text-black font-bold focus:ring-[3px] focus:ring-offset-1",
          "shadow-[0_0_0_0px_rgba(0,0,0)] hover:shadow-[4px_4px_0_0px_rgba(0,0,0)]"
        ),

        containedPrimary: cn("bg-purple-500 focus:ring-purple-500"),
        containedSecondary: cn("bg-pink-500 focus:ring-pink-500"),
        sizeSmall: cn("text-xs py-2 px-5"),
        sizeMedium: cn("text-sm py-[14px] px-7"),
        sizeLarge: cn("text-base py-[14px] px-7"),
      }}
      {...props}
    >
      Sing in
    </MuiButton>
  );
};

export default Button;
