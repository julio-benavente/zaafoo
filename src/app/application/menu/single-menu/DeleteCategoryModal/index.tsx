import RegularAlertModal, {
  RegularAlertModalProps,
} from "@/components/RegularAlertModal";
import React from "react";

interface DeleteCategoryModalProps
  extends Omit<RegularAlertModalProps, "children"> {
  category: string;
}

const DeleteCategoryModal = ({
  primaryButtonProps,
  secondaryButtonProps,
  ...props
}: DeleteCategoryModalProps) => {
  return (
    <RegularAlertModal
      open={props.open}
      title="Delete Item"
      variant="error-alt"
      primaryButtonProps={{
        children: "Delete",
        ...primaryButtonProps,
      }}
      secondaryButtonProps={{
        children: "Cancel",
        ...secondaryButtonProps,
      }}
    >
      <div>
        Are you sure you want to delete the <b>{props.category}</b> category.
        You will lose all the data related to this category.
      </div>
    </RegularAlertModal>
  );
};

export default DeleteCategoryModal;
