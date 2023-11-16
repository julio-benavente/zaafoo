import cn from "@/helpers/cn";
import MuiInputLabel, {
  InputLabelProps as MuiInputLabelProps,
} from "@mui/material/InputLabel";

interface InputLabelProps extends MuiInputLabelProps {
  required?: boolean;
}

const InputLabel = ({ className, ...props }: InputLabelProps) => {
  return (
    <MuiInputLabel
      className={cn(className)}
      classes={{
        root: cn("text-sm font-bold text-black"),
        asterisk: cn("text-red-600"),
      }}
      {...props}
    >
      {props.children}
    </MuiInputLabel>
  );
};

export default InputLabel;
