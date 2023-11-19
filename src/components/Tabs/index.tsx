import MuiTabs, { TabsProps } from "@mui/material/Tabs";

const Tabs = (props: TabsProps) => {
  return (
    <MuiTabs
      classes={{
        root: "min-h-[auto]",
        indicator: "hidden",
      }}
      {...props}
    />
  );
};

export default Tabs;
