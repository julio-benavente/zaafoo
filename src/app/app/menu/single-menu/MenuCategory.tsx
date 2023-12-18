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
          "py-4 px-4 bg-white border border-black border-solid border-b-0 grid grid-cols-[1fr_auto]",
          !showMenuItems && "border-b"
        )}
      >
        <div className="w-full">
          <Typography className="font-bold text-base" component={"span"}>
            {props.name}
          </Typography>{" "}
          <Typography variant="caption" component={"span"} className="pl-2">
            {props.menuItems?.length}{" "}
            {props.menuItems?.length === 1 ? "item" : "items"}
          </Typography>
        </div>
        <div className="flex gap-2">
          <IconButton onClick={toggleMenuItemsDisplay}>
            {!showMenuItems && <UnfoldMoreOutlinedIcon />}
            {showMenuItems && <UnfoldLessIcon />}
          </IconButton>
          <OptionsButton
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            ref={anchorRef}
          />
        </div>
        <Menu
          open={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
          anchorEl={anchorRef.current}
        >
          <MenuItem variant="option" onClick={closeMenu}>
            One
          </MenuItem>
          <MenuItem variant="option" onClick={closeMenu}>
            One
          </MenuItem>
          <MenuItem variant="option" onClick={closeMenu}>
            One
          </MenuItem>
          <MenuItem variant="option" onClick={closeMenu}>
            One
          </MenuItem>
        </Menu>
      </div>
      {showMenuItems &&
        props.menuItems?.map((product, i) => {
          return <MenuItemComponent key={product.id} {...product} />;
        })}
      {/* <div className="py-2 px-4 bg-white border border-black border-solid">
          <Typography className="text-sm">Add new product</Typography>
        </div> */}
    </div>
  );
};

export default MenuCategory;
