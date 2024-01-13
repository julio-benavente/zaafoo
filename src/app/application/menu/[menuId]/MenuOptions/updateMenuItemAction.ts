import { updateMenuItem } from "@/entities/menu/slice";
import errorSnackbar from "@/helpers/errorSnackbar";
import { FakeResponse } from "@/helpers/fakeRequest";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { UseFormReturn } from "react-hook-form";

interface UpdateMenuItemAction {
  formMethods: UseFormReturn;
  fakeRequest: () => Promise<FakeResponse>;
  closeModal: () => void;
  dispatch: Dispatch<UnknownAction>;
}

const updateMenuItemAction = async ({
  formMethods,
  fakeRequest,
  closeModal,
  dispatch,
}: UpdateMenuItemAction) => {
  const {
    getValues,
    trigger,
    formState: { isDirty },
  } = formMethods;

  formMethods.handleSubmit(async (data) => {
    if (!isDirty) {
      return trigger();
    }

    const response = await fakeRequest();

    if (response === "success") {
      // dispatch(updateMenu({ basePrice: "1" }));
      // dispatch(updateMenuItem({ }))
      succesfullSnackbar("This item was updated successfully.");

      closeModal();
    } else {
      errorSnackbar("Oops! There was a problem. Try it again.");
    }
  })();
};

export default updateMenuItemAction;
