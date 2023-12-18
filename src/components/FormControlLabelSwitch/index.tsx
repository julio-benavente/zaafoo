import {
  FormControlLabel,
  FormControlLabelProps,
  Typography,
} from "@mui/material";
import cn from "@/helpers/cn";

export const FormControlLabelSwitch = ({
  classes,
  ...props
}: FormControlLabelProps) => {
  return (
    <FormControlLabel
      classes={{
        ...classes,
        root: cn(
          "group relative m-0 w-fit flex gap-4 justify-between w-full pointer-events-none",
          classes?.root
        ),
        label: cn(
          "relative pl-7 text-lg pointer-events-none pl-0",
          "group-focus-within:underline group-focus-within:underline-offset-2",
          classes?.label
        ),
      }}
      labelPlacement="start"
      {...props}
    />
  );
};

export default FormControlLabelSwitch;
