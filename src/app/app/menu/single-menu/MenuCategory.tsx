import {
  IconButton,
  Menu,
  MenuItem,
  OptionsButton,
  Typography,
} from "@/components";
import { useRef, useState } from "react";
import { MenuCategoryProps } from "@/entities/menu/slice";
import MenuItemComponent from "./MenuItem";
import cn from "@/helpers/cn";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const MenuCategory = (props: MenuCategoryProps) => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const toggleMenuItemsDisplay = () => setShowMenuItems(!showMenuItems);

  const anchorRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const closeMenu = () => setMenuIsOpen(false);

  return (
    <div className="mb-8">
      <div
        className={cn(
          "py-4 px-4 bg-white border border-black border-solid border-b-0 grid grid-cols-[auto_1fr_auto] gap-3 items-center",
          !showMenuItems && "border-b"
        )}
      >
        <IconButton onClick={toggleMenuItemsDisplay}>
          {!showMenuItems && <UnfoldMoreOutlinedIcon />}
          {showMenuItems && <UnfoldLessIcon />}
        </IconButton>
        <div className="w-full grid grid-flow-row sm:grid-flow-col sm:justify-start sm:items-center">
          <Typography className="font-bold text-base" component={"span"}>
            {props.name}
          </Typography>{" "}
          <Typography
            variant="caption"
            component={"span"}
            className="sm:pl-2 text-gray-600"
          >
            {props.menuItems?.length}{" "}
            {props.menuItems?.length === 1 ? "item" : "items"}
          </Typography>
        </div>

        <OptionsButton
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          ref={anchorRef}
        />
        <Menu
          open={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
          anchorEl={anchorRef.current}
        >
          <MenuItem variant="option" onClick={closeMenu}>
            <ControlPointOutlinedIcon className="text-lg mr-2" /> New Item
          </MenuItem>
          <MenuItem variant="option" onClick={closeMenu}>
            <EditOutlinedIcon className="text-lg mr-2" /> Edit
          </MenuItem>
          <MenuItem
            variant="option"
            onClick={closeMenu}
            classes={{ root: "text-red-500 hover:bg-red-50" }}
          >
            <DeleteOutlineIcon className="text-lg mr-2" /> Delete
          </MenuItem>
        </Menu>
      </div>
      {showMenuItems &&
        props.menuItems?.map((product, i) => {
          return <MenuItemComponent key={product.id} {...product} />;
        })}
    </div>
  );
};

export default MenuCategory;
