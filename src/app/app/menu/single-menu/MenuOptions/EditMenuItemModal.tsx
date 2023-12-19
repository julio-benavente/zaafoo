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

  const basePrice = useSelector((state: RootState) => state.menu.basePrice);
  const dispatch = useDispatch();
  const [fakeResponse, fakeRequest] = useFakeRequest({ success: 0.8 });

  const updatePrices = async () => {
    const response = await fakeRequest();
    if (response === "success") {
      // dispatch(updateMenu({ basePrice: "1" }));
      succesfullSnackbar("Prices were updated successfully.");
      closeModal();
    } else {
      errorSnackbar("Oops! There was a problem. Try it again.");
    }
  };

  const defaultData: GeneralTabDataProps = {
    name: "Carne asada",
    basePrice: "29.99",
  };

  return (
    <MenuModalContainer
      open={props.open}
      title="Edit menu item"
      onClose={closeModal}
    >
      <GeneralTab
        cancelButtonAction={closeModal}
        actionButtonAction={updatePrices}
        state={fakeResponse}
        actionButtonLabel={
          fakeResponse === "loading" ? "Updating ..." : "Update"
        }
        data={defaultData}
      />
    </MenuModalContainer>
  );
};

export default CreateMenuItemModal;
