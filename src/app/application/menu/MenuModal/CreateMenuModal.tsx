import {
  InputContainer,
  InputLabel,
  StandardModal,
  TextField,
} from "@/components";
import React, { Dispatch, SetStateAction } from "react";

interface CreateMenuModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateMenuModal = (props: CreateMenuModal) => {
  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  return (
    <StandardModal
      title="Create menu"
      open={props.open}
      onClose={closeModal}
      primaryButtonProps={{
        children: "Create",
        onClick: closeModal,
      }}
      secondaryButtonProps={{
        children: "Cancel",
        onClick: closeModal,
      }}
    >
      <MenuOptions />
    </StandardModal>
  );
};

export default CreateMenuModal;

const MenuOptions = () => {
  return (
    <div>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
    </div>
  );
};
