import { Menu, MenuItem, OptionsButton, Typography } from "@/components";
import { MenuProps } from "@/entities/menu/slice";
import cn from "@/helpers/cn";
import Link from "next/link";
import React, { useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditMenuModal from "../MenuModal/EditMenuModal";

const MenuRow = ({ menu }: { menu: MenuProps }) => {
  const numberOfProducts = menu.categories.reduce((a, b) => {
    return a + b.menuItems.length;
  }, 0);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const anchorRef = useRef();

  const closeMenu = () => setMenuIsOpen(false);

  const [createMenuModalIsOpen, setCreateMenuModalIsOpen] = useState(false);

  const handleEditOption = () => {
    setCreateMenuModalIsOpen(true);
    closeMenu();
  };

  return (
    <Link
      href={`/application/menu/${menu.id}`}
      key={menu.id}
      className={cn(
        "py-3 px-4 border border-black [&:not(:last-of-type)]:border-b-0 bg-white cursor-pointer hover:bg-purple-50 inline-block !w-full",
        "grid grid-cols-[1fr_auto]"
      )}
    >
      <div className="w-full">
        <Typography className="font-bold">{menu.name}</Typography>
        <Typography className="text-sm text-gray-700">
          {menu.categories.length} categories - {numberOfProducts} products
        </Typography>
      </div>

      <div className="self-center pointer-events-none">
        <div className="pointer-events-auto">
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
          <MenuItem variant="option" onClick={handleEditOption}>
            <EditIcon className="text-sm mr-2" /> Edit
          </MenuItem>
        </Menu>
      </div>

      <EditMenuModal
        open={createMenuModalIsOpen}
        setOpen={setCreateMenuModalIsOpen}
        data={{ ...menu }}
      />
    </Link>
  );
};

export default MenuRow;
