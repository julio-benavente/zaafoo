import { Modal, ModalProps as MuiModalProps } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { Button, Typography } from "..";
import cn from "@/helpers/cn";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ErrorIcon from "@mui/icons-material/ErrorOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningIcon from "@mui/icons-material/WarningAmberOutlined";
import { ButtonProps } from "../Button";
import { StandardModalProps } from "../StandardModal";

export interface RegularAlertModalProps extends StandardModalProps {
  variant?: "info" | "warning" | "success" | "error" | "error-alt";
}

const RegularAlertModal = ({
  open,
  size = "md",
  variant = "info",
  classes,
  ...props
}: RegularAlertModalProps) => {
  return (
    <Modal
      open={open}
      classes={{ backdrop: "bg-black/90", ...classes }}
      {...props}
    >
      <div
        className={cn(
          "absolute outline-none",
          "bg-white w-full bottom-0 rounded-t-lg overflow-hidden",
          "sm:w-[calc(100%-10vw)] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-sm sm:bottom-auto",
          size === "sm" && "sm:max-w-md",
          size === "md" && "sm:max-w-lg",
          size === "lg" && "sm:max-w-xl"
        )}
      >
        <div
          className={cn(
            "py-3 px-5 border-b border-black grid grid-flow-col justify-between items-center gap-x-8",
            [
              variant === "info" && "bg-blue-500",
              variant === "warning" && "bg-orange-500",
              variant === "success" && "bg-green-500",
              variant === "error" && "bg-red-500",
              variant === "error-alt" && "bg-red-500",
            ]
          )}
        >
          <Typography className={cn("font-bold")}>
            {variant === "info" && <InfoOutlinedIcon className="mr-2" />}
            {variant === "warning" && <WarningIcon className="mr-2" />}
            {variant === "success" && <ErrorIcon className="mr-2" />}
            {variant === "error" && <ErrorIcon className="mr-2" />}
            {variant === "error-alt" && <ErrorIcon className="mr-2" />}

            {props.title}
          </Typography>
          <CloseOutlinedIcon
            className="cursor-pointer"
            onClick={(e) =>
              props?.onClose && props?.onClose(e, "backdropClick")
            }
          />
        </div>
        <div className="pt-5 px-5">{props.children}</div>

        <div
          className={cn(
            "grid grid-cols-1 mt-8 gap-x-4 pb-5 px-5 gap-y-4",
            "sm:grid-flow-col sm:auto-cols-fr sm:ml-auto sm:w-fit"
          )}
        >
          {props.primaryButtonProps && (
            <Button
              {...props.primaryButtonProps}
              className={cn("sm:order-2", [
                variant === "info" && "[&]:bg-blue-500",
                variant === "warning" && "[&]:bg-orange-500",
                variant === "success" && "[&]:bg-green-500",
                variant === "error" && "[&]:bg-red-500",
                variant === "error-alt" &&
                  "border-red-500 text-red-500 bg-white",
              ])}
            />
          )}
          {props.secondaryButtonProps && (
            <Button
              variant="outlined"
              className={cn([
                // variant === "error-alt" && "border-red-500 text-red-500",
                variant === "error-alt" && "[&]:bg-red-500",
              ])}
              {...props.secondaryButtonProps}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default RegularAlertModal;
