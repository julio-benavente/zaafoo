import cn from "@/helpers/cn";
import MuiTab, { TabProps } from "@mui/material/Tab";

const Tab = ({ classes, ...props }: TabProps) => {
  return (
    <MuiTab
      disableRipple
      classes={{
        root: cn(
          "all text-xs normal-case py-2 px-6 h-auto min-h-[auto] rounded-sm font-bold text-black",
          "lg:text-sm"
        ),
        selected: "bg-black text-white",

        ...classes,
      }}
      {...props}
    />
  );
};

export default Tab;
