import {
  InputContainer,
  InputLabel,
  StandardModal,
  TextField,
} from "@/components";
import React, { Dispatch, SetStateAction } from "react";
import MenuOptions from "./MenuOptions";
import { FormProvider, useForm } from "react-hook-form";
import useFakeRequest from "@/helpers/fakeRequest";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import errorSnackbar from "@/helpers/errorSnackbar";

interface CreateMenuModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface MenuFormProps {
  name: string;
}

const EditMenuModal = (props: CreateMenuModal) => {
  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  const formMethods = useForm<MenuFormProps>({
    mode: "all",
    criteriaMode: "all",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods;

  const [fakeResponse, fakeRequest] = useFakeRequest({ success: 0.9 });

  const editMenuHandler = () => {
    handleSubmit(async () => {
      const response = await fakeRequest();

      if (response === "success") {
        succesfullSnackbar("The menu was edited successfully.");
        closeModal();
      } else {
        errorSnackbar("There is a problem. Try it again.");
      }
    })();
  };

  return (
    <StandardModal
      title="Edit menu"
      open={props.open}
      onClose={closeModal}
      primaryButtonProps={{
        children: isSubmitting ? "Editing ..." : "Edit",
        disabled: isSubmitting,
        onClick: editMenuHandler,
      }}
      secondaryButtonProps={{
        children: "Cancel",
        disabled: isSubmitting,
        onClick: closeModal,
      }}
    >
      <FormProvider {...formMethods}>
        <MenuOptions />
      </FormProvider>
    </StandardModal>
  );
};

export default EditMenuModal;
