import cn from "@/helpers/cn";
import MuiInputAdornment, {
  InputAdornmentProps,
} from "@mui/material/InputAdornment";

const InputAdornment = ({
  className,
  position = "end",
  ...props
}: InputAdornmentProps) => {
  return (
    <MuiInputAdornment
      position={position}
      className={cn(
        "m-0 text-black transition-all",
        position === "start" && "pl-5 pr-3",
        position === "end" && "pl-3 pr-5",
        className
      )}
      {...props}
    />
  );
};

export default InputAdornment;
