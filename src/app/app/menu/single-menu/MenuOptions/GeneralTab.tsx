import {
  Button,
  InputContainer,
  InputLabel,
  RegularCloseButton,
  TextField,
} from "@/components";
import { updateMenu } from "@/entities/menu/slice";
import cn from "@/helpers/cn";
import useFakeRequest from "@/helpers/fakeRequest";
import { RootState } from "@/store";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";

interface GeneralTabProps {
  closeModal: () => void;
}

const GeneralTab = (props: GeneralTabProps) => {
  const [fakeResponse, fakeRequest] = useFakeRequest({ success: 0.1 });

  const basePrice = useSelector((state: RootState) => state.menu.basePrice);
  const dispatch = useDispatch();

  const updatePrices = async () => {
    const response = await fakeRequest();
    const snackbarId = Math.random();

    if (response === "success") {
      dispatch(updateMenu({ basePrice: "1" }));
      enqueueSnackbar({
        color: "success",
        children: "Prices were updated successfully.",
        id: snackbarId,
        action: (
          <RegularCloseButton
            onClick={() => {
              closeSnackbar(snackbarId);
            }}
          />
        ),
      });

      props.closeModal();
    } else {
      enqueueSnackbar({
        color: "error",
        children: "Oops! There was a problem. Try it again.",
        id: snackbarId,
        action: (
          <RegularCloseButton
            onClick={() => {
              closeSnackbar(snackbarId);
            }}
          />
        ),
      });
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-4">
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <TextField placeholder="Item's name" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Base Price</InputLabel>
          <TextField placeholder="$ 0.00" />
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
          onClick={() => {
            props.closeModal();
          }}
        >
          Cancel
        </Button>
        <Button onClick={updatePrices} className="w-full sm:w-fit">
          {fakeResponse === "loading" ? "Updating ..." : "Update"}
        </Button>
      </div>
    </div>
  );
};

export default GeneralTab;
