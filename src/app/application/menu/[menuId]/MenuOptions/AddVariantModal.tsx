import {
  InputContainer,
  InputLabel,
  RegularCloseButton,
  SelectFreeSolo,
  StandardModal,
  TextField,
} from "@/components";
import { useState } from "react";
import { renderInputComp } from "@/components/SelectFreeSolo";
import { useMenuOptionsApi, useMenuOptionsState } from "./context";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import useFakeRequest from "@/helpers/fakeRequest";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import errorSnackbar from "@/helpers/errorSnackbar";

const AddVariantModal = () => {
  const onCreateVariant = async () => {
    const response = await fakeRequest();
    const snackbarId = Math.random();

    if (response === "success") {
      succesfullSnackbar("The variant was created successfully");
    } else {
      errorSnackbar("There was a problem. Try it again.");
    }

    closeAddVariantModal();
  };
  const onCloseModal = () => {
    closeAddVariantModal();
  };

  const {
    variants: { addVariantModalIsOpen },
  } = useMenuOptionsState();
  const {
    variants: { closeAddVariantModal },
  } = useMenuOptionsApi();

  const [fakeResponse, fakeRequest] = useFakeRequest();

  return (
    <StandardModal
      open={addVariantModalIsOpen}
      title="Create variant"
      onClose={onCloseModal}
      primaryButtonProps={{
        children: fakeResponse === "loading" ? "Creating ..." : "Create",
        onClick: onCreateVariant,
      }}
      secondaryButtonProps={{
        children: "Cancel",
        onClick: onCloseModal,
      }}
    >
      <div className="grid grid-cols-1 gap-y-4">
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <TextField placeholder="Ex: Size" />
        </InputContainer>

        <InputContainer>
          <InputLabel>Attribute</InputLabel>

          <SelectFreeSolo
            renderInput={renderInputComp}
            placeholder="Ex. Small"
            options={[]}
            classes={{ root: "min-w-fit" }}
          />
        </InputContainer>
      </div>
    </StandardModal>
  );
};

export default AddVariantModal;
