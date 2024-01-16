import { InputContainer, InputLabel, TextField } from "@/components";
import { useController, useFormContext } from "react-hook-form";
import { MenuFormProps } from "./EditMenuModal";

interface MenuOptionsProps {}

const MenuOptions = (props: MenuOptionsProps) => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<MenuFormProps>();
  const nameFormProps = useController({
    control,
    name: "name",
    rules: {
      required: true,
    },
  });

  return (
    <div>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField
          placeholder="Your menu's name"
          {...nameFormProps.field}
          disabled={isSubmitting}
        />
      </InputContainer>
    </div>
  );
};

export default MenuOptions;
