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
    console.log(formIsValid);
    if (!formIsValid) {
      trigger();
      return null;
    }

    const response = await fakeRequest();

    if (response === "success") {
      dispatch(createCategory({ name: getValues().categoryName }));
      succesfullSnackbar("The variant was created successfully.");
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
    formState: { isValid: formIsValid },
    trigger,
  } = useForm<{ categoryName: string }>();
  const { field: categoryName } = useController({
    name: "categoryName",
    control,
    rules: { required: true },
  });

  return (
    <StandardModal
      open={open}
      headerTitle="Add category"
      onClose={closeModal}
      primaryButtonProps={{
        label: fakeResponse !== "loading" ? "Create" : "Creating ...",
        onClick: addCategory,
      }}
      secondaryButtonProps={{
        label: "Cancel",
        onClick: closeModal,
      }}
    >
      <div className="grid grid-cols-1 gap-y-4">
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <TextField placeholder="Ex: Size" {...categoryName} />
        </InputContainer>
      </div>
    </StandardModal>
  );
};

export default CreateNewCategoryModal;
