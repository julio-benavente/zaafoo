import {
  InputContainer,
  InputLabel,
  StandardModal,
  TextField,
} from "@/components";
import useFakeRequest from "@/helpers/fakeRequest";
import { useController, useForm } from "react-hook-form";
import { createCategory } from "@/entities/menu/slice";
import { useDispatch } from "react-redux";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import errorSnackbar from "@/helpers/errorSnackbar";

export interface CategoryModalDataProp {
  name?: string;
}

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: CategoryModalDataProp;
}

const EditCategoryModal = ({ open, setOpen, ...props }: IProps) => {
  const handleEditCategory = async () => {
    if (!formIsValid) {
      trigger();
      return null;
    }

    const response = await fakeRequest();

    if (response === "success") {
      dispatch(createCategory({ name: getValues().categoryName }));
      succesfullSnackbar("The category was upadted successfully.");
      setOpen(false);
      reset();
    } else {
      errorSnackbar("There was a problem. Try it again.");
    }
  };

  const handleCloseModal = () => {
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
    defaultValue: props?.data?.name,
  });

  return (
    <StandardModal
      open={open}
      headerTitle="Edit category"
      onClose={handleCloseModal}
      primaryButtonProps={{
        label: fakeResponse !== "loading" ? "Update" : "Updating ...",
        onClick: handleEditCategory,
      }}
      secondaryButtonProps={{
        label: "Cancel",
        onClick: handleCloseModal,
      }}
    >
      <div className="grid grid-cols-1 gap-y-4">
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <TextField placeholder="Ex: Breakfast" {...categoryName} />
        </InputContainer>
      </div>
    </StandardModal>
  );
};

export default EditCategoryModal;
