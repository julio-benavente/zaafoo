import {
  Button,
  InputContainer,
  InputLabel,
  MoneyInput,
  TextField,
} from "@/components";
import cn from "@/helpers/cn";
import { RequestState } from "./types";

export interface GeneralTabDataProps {
  name?: string;
  basePrice?: string;
}

interface GeneralTabProps {
  cancelButtonAction: () => void;
  actionButtonAction: () => void;
  actionButtonLabel: string;
  state?: RequestState;
  data?: GeneralTabDataProps;
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
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Base Price</InputLabel>
          <MoneyInput
            placeholder="$ 0.00"
            defaultValue={props.data?.basePrice}
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
          onClick={props.cancelButtonAction}
        >
          Cancel
        </Button>
        <Button
          onClick={() => props.actionButtonAction()}
          className="w-full sm:w-fit"
        >
          {props.actionButtonLabel}
        </Button>
      </div>
    </div>
  );
};

export default GeneralTab;
