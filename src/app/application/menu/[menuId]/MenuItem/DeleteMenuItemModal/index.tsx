import { RegularAlertModal } from "@/components";
import { RegularAlertModalProps } from "@/components/RegularAlertModal";
import React from "react";

interface DeleteMenuItemModalProps
  extends Omit<RegularAlertModalProps, "children"> {
  category: string;
}

const DeleteMenuItemModal = ({
  primaryButtonProps,
  secondaryButtonProps,
  ...props
}: DeleteMenuItemModalProps) => {
  return (
    <RegularAlertModal
      open={props.open}
      title="Delete Item"
      variant="error-alt"
      primaryButtonProps={{
        children: "Delete",
        onClick: () => console.log("Primary button"),
        ...primaryButtonProps,
      }}
      secondaryButtonProps={{
        children: "Cancel",
        onClick: () => console.log("Secondary button"),
        ...secondaryButtonProps,
      }}
    >
      <div>
        Are you sure you want to delete the <b>{props.category}</b> item. You
        will lose all the data related to this item.
      </div>
    </RegularAlertModal>
  );
};

export default DeleteMenuItemModal;
