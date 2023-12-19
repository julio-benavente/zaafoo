import MuiMenuItem, {
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material/MenuItem";
import cn from "@/helpers/cn";

interface MenuItemProps extends MuiMenuItemProps {
  variant?: "select" | "tab" | "option";
}

const MenuItem = ({
  className,
  classes,
  variant = "select",
  ...props
}: MenuItemProps) => {
  // console.log(props.value);
  return (
    <MuiMenuItem
      disableRipple
      className={cn(
        "py-2 text-inherit border border-black border-solid [&:not(:last-of-type)]:border-b-0 font-cabinet",
        "text-sm font-semibold px-5 py-2 bg-white hover:bg-purple-200 [&:not(:hover)]:focus:bg-purple-100 hover:bg-purple-300",
        props.value === "" && "text-gray-500",
        className
      )}
      classes={{
        ...classes,
        root: cn([
          variant === "tab" && "max-h-none min-h-min text-sm",
          variant === "option" && "max-h-none min-h-min text-sm",
          classes?.root,
        ]),
      }}
      {...props}
    />
  );
};

export default MenuItem;
