import { InputContainer, InputLabel, TextField } from "@/components";
import { ButtonProps } from "@/components/Button";
import StandardModal, { StandardModalProps } from "@/components/StandardModal";
import {
  MenuCategoryProps,
  createCategory,
  updateCategory,
} from "@/entities/menu/slice";
import errorSnackbar from "@/helpers/errorSnackbar";
import useFakeRequest from "@/helpers/fakeRequest";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import React from "react";
import {
  FormProvider,
  useForm,
  useFormContext,
  useController,
} from "react-hook-form";
import { useDispatch } from "react-redux";

interface CategoryModalProps
  extends Omit<
    StandardModalProps,
    "title" | "primaryButtonProps" | "children"
  > {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant: "create" | "update";
  categoryProps?: Pick<MenuCategoryProps, "id" | "name">;
}

interface CategoryVariantProp {
  title: string;
  primaryButtonProps: ButtonProps;
  secondaryButtonProps?: ButtonProps;
}

const CategoryModal = ({ ...props }: CategoryModalProps) => {
  const dispatch = useDispatch();

  // Form
  const formMethods = useForm<{ name: string }>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      name: props.categoryProps?.name,
    },
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = formMethods;
  const [fakeResponse, fakeRequest] = useFakeRequest();

  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  // Variants
  const createProps: CategoryVariantProp = {
    title: "Create Category",
    secondaryButtonProps: {
      children: "Cancel",
      onClick: () => {
        closeModal();
      },
      disabled: isSubmitting,
    },
    primaryButtonProps: {
      children: isSubmitting ? "Creating ..." : "Create",
      disabled: isSubmitting,
      onClick: () => {
        handleSubmit(async (data) => {
          const response = await fakeRequest();

          if (response === "success") {
            dispatch(createCategory({ name: data.name }));
            succesfullSnackbar("The category was created successfully.");
            reset();
            props.setOpen(false);
          } else {
            errorSnackbar("There was a problem. Try it again.");
          }
        })();
      },
    },
  };

  const updateProps: CategoryVariantProp = {
    title: "Update Category",
    secondaryButtonProps: {
      children: "Cancel",
      onClick: () => {
        closeModal();
      },
      disabled: isSubmitting,
    },
    primaryButtonProps: {
      children: isSubmitting ? "Updating ..." : "Update",
      disabled: isSubmitting,
      onClick: () => {
        handleSubmit(async (data) => {
          const response = await fakeRequest();

          if (response === "success") {
            dispatch(
              updateCategory({ id: props.categoryProps?.id!, name: data.name })
            );
            succesfullSnackbar("The category was updated successfully.");
            reset();
            props.setOpen(false);
          } else {
            errorSnackbar("There was a problem. Try it again.");
          }
        })();
      },
    },
  };

  const variants = {
    create: createProps,
    update: updateProps,
  };

  const chosenVariant = variants[props.variant];

  // // //

  return (
    <StandardModal
      title={chosenVariant?.title}
      primaryButtonProps={chosenVariant.primaryButtonProps}
      secondaryButtonProps={chosenVariant.secondaryButtonProps}
      {...props}
      open={props.open}
    >
      <FormProvider {...formMethods}>
        <GeneralOptions />
      </FormProvider>
    </StandardModal>
  );
};

export default CategoryModal;

// Create a wrapper compoment where all the
// props are gonna be chosen

// Create a component that recieves all the actions needed

export const GeneralOptions = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();

  const { field: categoryNameFormProps } = useController({
    name: "name",
    control,
    rules: { required: true },
  });

  return (
    <div className="grid grid-cols-1 gap-y-4">
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField
          placeholder="Ex: Size"
          {...categoryNameFormProps}
          disabled={isSubmitting}
        />
      </InputContainer>
    </div>
  );
};
