import { Typography } from "@/components";
import { useState } from "react";
import MenuOptions from "./MenuOptions";
import { MenuItemProps } from "@/entities/menu/slice";

const MenuItem = (props: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCategorySection = () => setIsOpen(!isOpen);
  return (
    <div className="border border-black border-solid border-b-0 [&:last-of-type]:border-b">
      <div className="py-2 px-4 bg-white" onClick={toggleCategorySection}>
        <Typography className="">{props.name}</Typography>
      </div>
      <MenuOptions open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};

export default MenuItem;
