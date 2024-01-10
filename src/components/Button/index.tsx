import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import cn from "@/helpers/cn";

export interface ButtonProps extends MuiButtonProps {}

const Button = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      disableRipple
      variant={variant}
      color={color}
      size={size}
      type={type}
      classes={{
        root: cn(
          "relative normal-case rounded-sm border border-black border border-solid text-black font-bold",
          "shadow-[0_0_0_0px_rgba(0,0,0)] hover:shadow-[4px_4px_0_0px_rgba(0,0,0)] focus:shadow-[4px_4px_0_0px_rgba(0,0,0)]"
        ),
        containedPrimary: cn("bg-purple-500"),
        containedSecondary: cn("bg-pink-500"),
        disabled: cn(
          variant === "contained" && [
            "[&&]:bg-gray-200 [&]:text-gray-600 [&]:border-gray-600",
          ],
          variant === "outlined" && [
            "[&]:border-gray-200 [&]:text-gray-600 [&]:border-gray-600 [&&]:bg-gray-50",
          ]
        ),
        sizeSmall: cn("text-xs py-2 px-5"),
        sizeMedium: cn("text-sm py-[14px] px-7"),
        sizeLarge: cn("text-base py-[14px] px-7"),
      }}
      {...props}
    />
  );
};

export default Button;
