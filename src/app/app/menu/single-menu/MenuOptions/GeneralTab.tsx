import {
  Button,
  InputContainer,
  InputLabel,
  MoneyInput,
  TextField,
} from "@/components";
import cn from "@/helpers/cn";
import { RequestState } from "./types";
import {
  useForm,
  useController,
  UseFormReturn,
  UseControllerProps,
  UseControllerReturn,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { ButtonProps } from "@/components/Button";

export interface GeneralTabDataProps {
  name?: string;
  basePrice?: string;
}

interface GeneralTabProps {
  cancelButtonProps?: ButtonProps;
  actionButtonProps?: ButtonProps;
  state?: RequestState;
  data?: GeneralTabDataProps;
  itemsNameFormProps: ControllerRenderProps<FieldValues, any>;
  basePriceFormProps: ControllerRenderProps<FieldValues, any>;
}

const GeneralTab = (props: GeneralTabProps) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <TextField
            placeholder="Item's name"
            defaultValue={props.data?.name}
            {...props.itemsNameFormProps}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Base Price</InputLabel>
          <MoneyInput
            placeholder="$ 0.00"
            defaultValue={props.data?.basePrice}
            {...props.basePriceFormProps}
          />
        </InputContainer>
      </div>
      <div
        className={cn(
          "grid mt-8 gap-4 grid-cols-1 w-full",
          "sm:w-fit sm:ml-auto sm:grid-cols-none sm:grid-flow-col"
        )}
      >
        <Button
          variant="outlined"
          className="w-full order-2 sm:order-none sm:w-fit"
          {...props.cancelButtonProps}
        >
          Cancel
        </Button>
        <Button className="w-full sm:w-fit" {...props.actionButtonProps} />
      </div>
    </div>
  );
};

export default GeneralTab;
