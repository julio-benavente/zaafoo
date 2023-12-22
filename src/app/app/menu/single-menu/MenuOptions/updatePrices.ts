import errorSnackbar from "@/helpers/errorSnackbar";
import { FakeResponse } from "@/helpers/fakeRequest";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import { UseFormReturn } from "react-hook-form";

interface UpdatePricesAction {
  formMethods: UseFormReturn;
  fakeRequest: () => Promise<FakeResponse>;
  closeModal: () => void;
}

const updatePrices = async ({
  formMethods,
  fakeRequest,
  closeModal,
}: UpdatePricesAction) => {
  const {
    getValues,
    trigger,
    formState: { isDirty },
  } = formMethods;

  if (!isDirty) {
    return trigger();
  }

  const response = await fakeRequest();

  if (response === "success") {
    // dispatch(updateMenu({ basePrice: "1" }));
    succesfullSnackbar("This item was updated successfully.");
    closeModal();
  } else {
    errorSnackbar("Oops! There was a problem. Try it again.");
  }
};

export default updatePrices;
