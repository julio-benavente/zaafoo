import GeneralTab, { GeneralTabDataProps } from "./GeneralTab";
import { MenuOptionsProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import errorSnackbar from "@/helpers/errorSnackbar";
import useFakeRequest from "@/helpers/fakeRequest";
import { RootState } from "@/store";
import MenuModalContainer from "./MenuModalContainer";

const CreateMenuItemModal = (props: MenuOptionsProps) => {
  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  const dispatch = useDispatch();
  const [fakeResponse, fakeRequest] = useFakeRequest({ success: 0.8 });

  const updatePrices = async () => {
    const response = await fakeRequest();
    if (response === "success") {
      // dispatch(updateMenu({ basePrice: "1" }));
      succesfullSnackbar("Menu item was successfully created.");
      closeModal();
    } else {
      errorSnackbar("Oops! There was a problem. Try it again.");
    }
  };

  return (
    <MenuModalContainer
      open={props.open}
      title="Create a menu item"
      onClose={closeModal}
    >
      <GeneralTab
        cancelButtonAction={closeModal}
        actionButtonAction={updatePrices}
        state={fakeResponse}
        actionButtonLabel={
          fakeResponse === "loading" ? "Creating ..." : "Create"
        }
      />
    </MenuModalContainer>
  );
};

export default CreateMenuItemModal;
