import { Typography } from "@/components";
import { useRef, useState } from "react";
import MenuOptions from "./MenuOptions";
import { MenuItemProps } from "@/entities/menu/slice";
import { Menu, OptionsButton } from "@/components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { MenuItem as MenuItemComponent } from "@/components";

const MenuItem = (props: MenuItemProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleCategorySection = () => setModalIsOpen(!modalIsOpen);

  const [showMenuItems, setShowMenuItems] = useState(false);
  const toggleMenuItemsDisplay = () => setShowMenuItems(!showMenuItems);

  const anchorRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const closeMenu = () => setMenuIsOpen(false);

  const handleEditMenuItem = () => {
    setModalIsOpen(true);
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
      <Menu
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        anchorEl={anchorRef.current}
      >
        <MenuItemComponent variant="option" onClick={handleEditMenuItem}>
          <EditOutlinedIcon className="text-lg mr-2" /> Edit
        </MenuItemComponent>
        <MenuItemComponent
          variant="option"
          onClick={closeMenu}
          classes={{ root: "text-red-500 hover:bg-red-50" }}
        >
          <DeleteOutlineIcon className="text-lg mr-2" /> Delete
        </MenuItemComponent>
      </Menu>

      <MenuOptions open={modalIsOpen} setOpen={setModalIsOpen} />
    </div>
  );
};

export default MenuItem;
