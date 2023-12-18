import cn from "@/helpers/cn";
import MuiMenu, { MenuProps } from "@mui/material/Menu";

const Menu = ({ open, classes, ...props }: MenuProps) => {
  return (
    <MuiMenu
      open={open}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      classes={{
        root: "p-0 shadow-none rounded-none mr-2",
        list: "p-0",
        paper: "rounded-none shadow-none transition-none",
        ...classes,
      }}
      anchorReference="anchorEl"
      anchorOrigin={{ horizontal: "left", vertical: "top" }}
      {...props}
    />
  );
};

export default Menu;
