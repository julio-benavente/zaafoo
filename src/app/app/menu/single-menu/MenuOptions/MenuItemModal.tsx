import GeneralTab, { GeneralTabDataProps } from "./GeneralTab";
import { MenuOptionsProps } from "./types";
import { useDispatch } from "react-redux";
import useFakeRequest from "@/helpers/fakeRequest";
import MenuModalContainer from "./MenuModalContainer";
import { UseFormReturn, useController, useForm } from "react-hook-form";
import updatePrices from "./updatePrices";

interface VariantProps {
  title: string;
  buttonLable: string;
  buttonLoadingLabel: string;
  cancelButtonAction: () => void;
  actionButtonAction: () => void;
  defaultData?: GeneralTabDataProps;
}

const CreateOrEditMenuItemModal = ({
  variant = "create",
  ...props
}: MenuOptionsProps) => {
  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  const [fakeResponse, fakeRequest] = useFakeRequest({ success: 0.0 });
  const formMethods = useForm({ mode: "all" });

  const createMenuItem = () => {};

  const variantsProps: { create: VariantProps; update: VariantProps } = {
    create: {
      title: "Create menu item",
      buttonLable: "Create",
      buttonLoadingLabel: "Creating ...",
      cancelButtonAction: createMenuItem,
      actionButtonAction: createMenuItem,
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

  const chosenVariant = variantsProps[variant];

  return (
    <MenuModalContainer
      open={props.open}
      title={chosenVariant.title}
      onClose={closeModal}
    >
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
    </MenuModalContainer>
  );
};

export default CreateOrEditMenuItemModal;

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
