import GeneralTab, { GeneralTabDataProps } from "./GeneralTab";
import { MenuOptionsProps } from "./types";
import useFakeRequest from "@/helpers/fakeRequest";
import MenuModalContainer from "./MenuModalContainer";
import {
  FormProvider,
  UseFormReturn,
  useController,
  useForm,
} from "react-hook-form";
import updatePrices from "./updatePrices";
import { useDispatch } from "react-redux";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import errorSnackbar from "@/helpers/errorSnackbar";
import { createMenuItem } from "@/entities/menu/slice";

interface VariantProps {
  title: string;
  buttonLable: string;
  buttonLoadingLabel: string;
  cancelButtonAction: () => void;
  actionButtonAction: () => void;
  defaultData?: GeneralTabDataProps;
}

const MenuItemModal = ({ variant = "create", ...props }: MenuOptionsProps) => {
  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  const [fakeResponse, fakeRequest] = useFakeRequest({ success: 0.8 });
  const formMethods = useForm({ mode: "all" });

  const dispatch = useDispatch();

  const cancelMenuItemModal = () => {
    closeModal();
  };
  const createMenuItemAction = async () => {
    const response = await fakeRequest();

    if (response === "success") {
      dispatch(
        createMenuItem({
          categoryId: props.categoryId,
          name: formMethods.getValues().itemsName,
          basePrice: formMethods.getValues().basePrice,
        })
      );
      succesfullSnackbar("The item was created successfully.");
      formMethods.reset();
      closeModal();
    } else {
      errorSnackbar("There was a problem. Try it again.");
    }
  };

  const menuVariantsProps: { create: VariantProps; update: VariantProps } = {
    create: {
      title: "Create menu item",
      buttonLable: "Create",
      buttonLoadingLabel: "Creating ...",
      cancelButtonAction: cancelMenuItemModal,
      actionButtonAction: createMenuItemAction,
    },
    update: {
      title: "Update menu item",
      buttonLable: "Update",
      buttonLoadingLabel: "Updating ...",
      cancelButtonAction: closeModal,
      actionButtonAction: () =>
        updatePrices({ formMethods, closeModal, fakeRequest }),
      defaultData: {
        name: "Carne asada",
        basePrice: "29239.20",
      },
    },
  };

  const chosenVariant = menuVariantsProps[variant];

  return (
    <MenuModalContainer
      open={props.open}
      title={chosenVariant.title}
      onClose={closeModal}
    >
      <FormProvider {...formMethods}>
        <GeneralTab
          state={fakeResponse}
          data={chosenVariant.defaultData}
          itemsNameFormProps={{
            ...itemsNameFormProps(formMethods).field,
            disabled: fakeResponse === "loading",
          }}
          basePriceFormProps={{
            ...basePriceFormProps(formMethods).field,
            disabled: fakeResponse === "loading",
          }}
          cancelButtonProps={{
            onClick: chosenVariant.cancelButtonAction,
            disabled: fakeResponse === "loading",
          }}
          actionButtonProps={{
            onClick: chosenVariant.actionButtonAction,
            children:
              fakeResponse === "loading"
                ? chosenVariant.buttonLoadingLabel
                : chosenVariant.buttonLable,
            disabled:
              !formMethods.formState.isDirty || fakeResponse === "loading",
          }}
        />
      </FormProvider>
    </MenuModalContainer>
  );
};

export default MenuItemModal;

const itemsNameFormProps = (formMethods: UseFormReturn) =>
  useController({
    name: "itemsName",
    rules: {
      required: true,
    },
    control: formMethods.control,
  });

const basePriceFormProps = (formMethods: UseFormReturn) =>
  useController({
    name: "basePrice",
    rules: {
      required: true,
    },
    control: formMethods.control,
  });
