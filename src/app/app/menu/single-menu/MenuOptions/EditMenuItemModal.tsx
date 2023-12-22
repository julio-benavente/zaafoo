import GeneralTab, { GeneralTabDataProps } from "./GeneralTab";
import { MenuOptionsProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import errorSnackbar from "@/helpers/errorSnackbar";
import useFakeRequest from "@/helpers/fakeRequest";
import { RootState } from "@/store";
import MenuModalContainer from "./MenuModalContainer";
import {
  FormProps,
  UseControllerProps,
  UseFormProps,
  UseFormReturn,
  useController,
  useForm,
} from "react-hook-form";

const EditMenuItemModal = (props: MenuOptionsProps) => {
  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  // const basePrice = useSelector((state: RootState) => state.menu.basePrice);
  const dispatch = useDispatch();
  const [fakeResponse, fakeRequest] = useFakeRequest({ success: 0.0 });
  const formMethods = useForm({ mode: "all" });

  const updatePrices = async () => {
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

  const { field: itemsName } = useController({
    ...itemsNameFormSettings,
    control: formMethods.control,
  });

  const { field: basePrice } = useController({
    ...basePriceFormSettings,
    control: formMethods.control,
  });

  return (
    <MenuModalContainer
      open={props.open}
      title="Edit menu item"
      onClose={closeModal}
    >
      <GeneralTab
        state={fakeResponse}
        data={defaultData}
        itemsNameFormProps={{
          ...itemsName,
          disabled: fakeResponse === "loading",
        }}
        basePriceFormProps={{
          ...basePrice,
          disabled: fakeResponse === "loading",
        }}
        cancelButtonProps={{
          onClick: closeModal,
          disabled: fakeResponse === "loading",
        }}
        actionButtonProps={{
          onClick: updatePrices,
          children: fakeResponse === "loading" ? "Updating ..." : "Update",
          disabled:
            !formMethods.formState.isDirty || fakeResponse === "loading",
        }}
      />
    </MenuModalContainer>
  );
};

export default EditMenuItemModal;

const defaultData: GeneralTabDataProps = {
  name: "Carne asada",
  basePrice: "29.99",
};

const itemsNameFormSettings: UseControllerProps = {
  name: "itemsName",
  rules: {
    required: true,
  },
};

const basePriceFormSettings: UseControllerProps = {
  name: "basePrice",
  rules: {
    required: true,
  },
};
