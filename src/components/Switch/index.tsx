import cn from "@/helpers/cn";
import MuiSwitch, { SwitchProps } from "@mui/material/Switch";

const Switch = ({ classes, checked, value, ...props }: SwitchProps) => {
  const isChecked = value || checked;
  return (
    <MuiSwitch
      disableRipple
      classes={{
        root: cn("p-0 pointer-events-auto"),
        switchBase: cn("px-1 py-1 h-full"),
        thumb: cn(
          "p-0 rounded-sm bg-black border-black border h-7 w-7 shadow-none",
          [
            props.disabled && isChecked && "bg-gray-400",
            props.disabled && !isChecked && "bg-gray-300",
          ]
        ),
        track: cn(
          "rounded-sm border border-black bg-white opacity-100",
          isChecked && "bg-purple-500",
          [props.disabled && "bg-gray-200"]
        ),
      }}
      checked={Boolean(isChecked)}
      {...props}
    />
  );
};

export default Switch;
