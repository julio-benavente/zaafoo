import MuiSelect, { SelectProps } from "@mui/material/Select";
import cn from "@/helpers/cn";

const SelectInput = ({ children, className, ...props }: SelectProps) => {
  return (
    <MuiSelect
      placeholder="Select"
      // value={age}
      className={cn("text-black min-w-xs", className)}
      displayEmpty
      // open
      // onChange={handleChange}
      classes={{
        root: cn(
          "outline-none font-cabinet",
          "group rounded-sm text-sm font-semibold bg-white",
          "[&>fieldset]:border-black [&>fieldset]:border-solid [&>fieldset]:outline-none [&>fieldset]:border"
        ),
        select: cn(
          "pl-5 pr-10 py-5 h-16 box-border border-black grid items-center"
        ),
      }}
      MenuProps={{
        classes: {
          root: "rounded-sm text p-0 outline-none border-black",
          paper:
            "transition-none py-0 mt-2 rounded-none shadow-none outline-none border-black",
          list: cn("py-0 text-5xl"),
        },
      }}
      {...props}
    >
      {children}
    </MuiSelect>
  );
};

export default SelectInput;
