import cn from "@/helpers/cn";
import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";
import { forwardRef } from "react";

const IconButton = forwardRef(
  ({ size = "small", ...props }: IconButtonProps, ref: any) => {
    return (
      <MuiIconButton
        disableRipple
        size={size}
        classes={{
          root: cn(
            "text-black border relative py-0 px-1 border rounded-sm p-0 hover:bg-black hover:text-white h-fit"
          ),
          sizeSmall: "p-1 [&>svg]:text-lg",
          sizeMedium: "p-2 [&>svg]:text-lg",
          sizeLarge: "p-2 [&>svg]:text-xl",
        }}
        {...props}
        ref={ref}
      />
    );
  }
);

export default IconButton;
