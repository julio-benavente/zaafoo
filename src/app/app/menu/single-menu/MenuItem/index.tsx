import { Typography } from "@/components";
import { useRef, useState } from "react";

import { MenuItemProps, deleteMenuItem } from "@/entities/menu/slice";
import { Menu, OptionsButton } from "@/components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { MenuItem as MenuItemComponent } from "@/components";
import MenuItemModal from "../MenuOptions/MenuItemModal";
import DeleteMenuItemModal from "./DeleteMenuItemModal";
import { useDispatch } from "react-redux";

interface MenuItemComponentProps extends MenuItemProps {
  categoryId: string;
}

const MenuItem = (props: MenuItemComponentProps) => {
  const dispatch = useDispatch();

  const [updateItemModalIsOpen, setUpdateItemModalIsOpen] = useState(false);

  const [deleteMenuItemModalIsOpen, setDeleteMenuItemModalIsOpen] =
    useState(false);
  const closeDeleteMenuItemModal = () => {
    closeMenu();
    setDeleteMenuItemModalIsOpen(false);
  };
  const deleteMenuItemHandler = () => {
    console.log({ categoryId: props.categoryId, id: props.id });
    dispatch(deleteMenuItem({ categoryId: props.categoryId, id: props.id }));
    closeDeleteMenuItemModal();
  };

  const anchorRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const closeMenu = () => setMenuIsOpen(false);
  const deleteMenuItemOptionHandler = () => setDeleteMenuItemModalIsOpen(true);

  const handleEditMenuItem = () => {
    setUpdateItemModalIsOpen(true);
    closeMenu();
  };

  return (
    <div className="border border-black border-solid border-b-0 [&:last-of-type]:border-b">
      <div className="py-2 px-4 bg-white grid grid-cols-[1fr_auto]">
        <Typography className="">{props.name}</Typography>
        <div>
          <OptionsButton
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            ref={anchorRef}
          />
        </div>
      </div>

      <Menu open={menuIsOpen} onClose={closeMenu} anchorEl={anchorRef.current}>
        <MenuItemComponent variant="option" onClick={handleEditMenuItem}>
          <EditOutlinedIcon className="text-lg mr-2" /> Edit Item
        </MenuItemComponent>
        <MenuItemComponent
          variant="option"
          onClick={deleteMenuItemOptionHandler}
          classes={{ root: "text-red-500 hover:bg-red-200" }}
        >
          <DeleteOutlineIcon className="text-lg mr-2" /> Delete Item
        </MenuItemComponent>
      </Menu>

      <DeleteMenuItemModal
        open={deleteMenuItemModalIsOpen}
        category={props.name}
        primaryButtonProps={{
          onClick: deleteMenuItemHandler,
        }}
        secondaryButtonProps={{
          onClick: closeDeleteMenuItemModal,
        }}
      />

      <MenuItemModal
        variant="update"
        categoryId={props.categoryId}
        open={updateItemModalIsOpen}
        setOpen={setUpdateItemModalIsOpen}
        defaultData={{ ...props }}
      />
    </div>
  );
};

export default MenuItem;
