import {
  InputContainer,
  InputLabel,
  StandardModal,
  TextField,
} from "@/components";
import React, { Dispatch, SetStateAction } from "react";
import MenuOptions from "./MenuOptions";
import { FormProvider, useForm } from "react-hook-form";
import { MenuFormProps } from "./types";
import useFakeRequest from "@/helpers/fakeRequest";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import errorSnackbar from "@/helpers/errorSnackbar";
import { useDispatch } from "react-redux";
import { createMenu } from "@/entities/menu/slice";

interface CreateMenuModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateMenuModal = (props: CreateMenuModal) => {
  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  const formMethods = useForm<MenuFormProps>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      name: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = formMethods;

  const [fakeResponse, fakeRequest] = useFakeRequest({ success: 0.9 });
  const disptach = useDispatch();

  const createMenuHandler = () => {
    handleSubmit(async (data) => {
      const response = await fakeRequest();

      if (response === "success") {
        disptach(createMenu({ name: data.name }));
        reset();
        succesfullSnackbar("The menu was created successfully.");
        closeModal();
      } else {
        errorSnackbar("There is a problem. Try it again.");
      }
    })();
  };

  return (
    <StandardModal
      title="Create menu"
      open={props.open}
      onClose={closeModal}
      primaryButtonProps={{
        children: isSubmitting ? "Creating ..." : "Create",
        disabled: isSubmitting,
        onClick: createMenuHandler,
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

export default CreateMenuModal;
