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
import updateMenuItemAction from "./updateMenuItemAction";
import { useDispatch } from "react-redux";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import errorSnackbar from "@/helpers/errorSnackbar";
import { createMenuItem, updateMenuItem } from "@/entities/menu/slice";

interface VariantProps {
  title: string;
  buttonLable: string;
  buttonLoadingLabel: string;
  cancelButtonAction: () => void;
  actionButtonAction: () => void;
  defaultData?: Omit<GeneralTabDataProps, "id">;
}

interface MenuItemModalFormProps {
  name: string;
  basePrice: string;
}

const MenuItemModal = ({ variant = "create", ...props }: MenuOptionsProps) => {
  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  const [fakeResponse, fakeRequest] = useFakeRequest({ success: 0.8 });
  const formMethods = useForm<MenuItemModalFormProps>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: props.defaultData,
  });

  const { handleSubmit, getValues } = formMethods;

  const dispatch = useDispatch();

  const cancelMenuItemModal = () => {
    closeModal();
  };

  const createMenuItemAction = async () => {
    const response = await fakeRequest();

    if (response === "success") {
      dispatch(
        createMenuItem({
          menuId: props.menuId,
          categoryId: props.categoryId,
          name: formMethods.getValues().name,
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
      actionButtonAction: () => {
        formMethods.handleSubmit(async (data) => {
          const response = await fakeRequest();

          if (response === "success") {
            dispatch(
              updateMenuItem({
                menuId: props.menuId,
                categoryId: props.categoryId,
                id: props.defaultData?.id!,
                ...data,
              })
            );
            succesfullSnackbar("The item was updated successfully.");
            formMethods.reset();
            closeModal();
          } else {
            errorSnackbar("We couldn't update the item. Try it again.");
          }
        })();
      },
      defaultData: props.defaultData,
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

const itemsNameFormProps = (
  formMethods: UseFormReturn<MenuItemModalFormProps>
) =>
  useController({
    name: "name",
    rules: {
      required: true,
    },
    control: formMethods.control,
  });

const basePriceFormProps = (
  formMethods: UseFormReturn<MenuItemModalFormProps>
) =>
  useController({
    name: "basePrice",
    rules: {
      required: true,
    },
    control: formMethods.control,
  });
