import {
  InputContainer,
  InputLabel,
  RegularCloseButton,
  SelectFreeSolo,
  StandardModal,
  TextField,
} from "@/components";
import { ReactNode, useState } from "react";
import { renderInputComp } from "@/components/SelectFreeSolo";
import useFakeRequest from "@/helpers/fakeRequest";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { useController, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { createCategory } from "@/entities/menu/slice";
import { useDispatch } from "react-redux";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import errorSnackbar from "@/helpers/errorSnackbar";

interface CreateNewCategoryModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateNewCategoryModal = ({
  open,
  setOpen,
}: CreateNewCategoryModalProps) => {
  const addCategory = async () => {
    if (!formIsValid) {
      trigger();
      return null;
    }

    const response = await fakeRequest();

    if (response === "success") {
      dispatch(createCategory({ name: getValues().categoryName }));
      succesfullSnackbar("The category was created successfully.");
      setOpen(false);
      reset();
    } else {
      errorSnackbar("There was a problem. Try it again.");
    }
  };
  const closeModal = () => {
    setOpen(false);
    reset();
  };

  const [fakeResponse, fakeRequest] = useFakeRequest();
  const dispatch = useDispatch();
  const {
    control,
    getValues,
    reset,
    handleSubmit,

    formState: { isValid: formIsValid, isSubmitting },
    trigger,
  } = useForm<{ categoryName: string }>();
  const { field: categoryName } = useController({
    name: "categoryName",
    control,
    rules: { required: true },
  });

  const triggerSubmit = () => {
    handleSubmit(addCategory)();
  };

  return (
    <StandardModal
      open={open}
      title="Add category"
      onClose={!isSubmitting ? closeModal : undefined}
      primaryButtonProps={{
        children: fakeResponse !== "loading" ? "Create" : "Creating ...",
        onClick: triggerSubmit,
        disabled: isSubmitting,
      }}
      secondaryButtonProps={{
        children: "Cancel",
        onClick: closeModal,
        disabled: isSubmitting,
      }}
    >
      <div className="grid grid-cols-1 gap-y-4">
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <TextField
            placeholder="Ex: Size"
            {...categoryName}
            disabled={isSubmitting}
          />
        </InputContainer>
      </div>
    </StandardModal>
  );
};

export default CreateNewCategoryModal;
