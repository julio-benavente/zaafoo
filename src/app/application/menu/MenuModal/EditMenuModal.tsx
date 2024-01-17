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
import { MenuProps, updateMenu } from "@/entities/menu/slice";
import { MenuFormProps } from "./types";
import { useDispatch } from "react-redux";

interface EditMenuModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: Partial<MenuProps>;
}

const EditMenuModal = (props: EditMenuModal) => {
  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  const formMethods = useForm<MenuFormProps>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      ...props.data,
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = formMethods;

  const [fakeResponse, fakeRequest] = useFakeRequest({ success: 0.9 });
  const dispatch = useDispatch();

  const editMenuHandler = () => {
    handleSubmit(async (data) => {
      const response = await fakeRequest();

      if (response === "success") {
        succesfullSnackbar("The menu was edited successfully.");
        dispatch(updateMenu({ id: props.data.id!, name: data.name! }));
        closeModal();
        // reset();
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
