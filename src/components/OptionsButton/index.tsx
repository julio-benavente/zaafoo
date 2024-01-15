import { IconButtonProps } from "@mui/material/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import { forwardRef } from "react";
import cn from "@/helpers/cn";
import { IconButton } from "..";

const OptionsButton = forwardRef(({ ...props }: IconButtonProps, ref: any) => {
  return (
    <IconButton ref={ref} {...props}>
      <MoreVert />
    </IconButton>
  );
});

OptionsButton.displayName = "OptionsButton";

export default OptionsButton;
