import MuiSelect, { SelectProps } from "@mui/material/Select";
import cn from "@/helpers/cn";

const SelectTabs = ({ children, className, ...props }: SelectProps) => {
  return (
    <MuiSelect
      placeholder="Select"
      // value={age}
      className={cn("text-black min-w-[120px]", className)}
      displayEmpty
      // open
      // onChange={handleChange}
      classes={{
        root: cn(
          "outline-none font-cabinet",
          "[&>fieldset]:border-black [&>fieldset]:border-solid [&>fieldset]:outline-none [&>fieldset]:border [&>fieldset]:rounded-sm"
        ),
        select: cn(
          "pl-2 pr-8 py-2 box-border border-black grid items-center bg-black text-white text-sm font-bold"
        ),
        icon: "text-white",
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

export default SelectTabs;
