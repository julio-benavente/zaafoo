import { Modal, ModalProps as MuiModalProps } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { Button, Typography } from "..";
import cn from "@/helpers/cn";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export interface StandardModalProps extends MuiModalProps {
  headerTitle: string;
  size?: "sm" | "md" | "lg";
  primaryButtonProps: {
    label: ReactNode;
    onClick: () => any;
  };
  secondaryButtonProps?: {
    label: ReactNode;
    onClick: () => any;
  };
}

const StandardModal = ({
  open,
  size = "md",
  classes,
  ...props
}: StandardModalProps) => {
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
        <div className="py-3 px-5 border-b border-black grid grid-flow-col justify-between items-center gap-x-8 bg-pink-500">
          <Typography className="font-bold">{props.headerTitle}</Typography>
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
            <Button {...props.primaryButtonProps} className="sm:order-2">
              {props.primaryButtonProps.label}
            </Button>
          )}
          {props.secondaryButtonProps && (
            <Button variant="outlined" {...props.secondaryButtonProps}>
              {props.secondaryButtonProps.label}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default StandardModal;
