import { InputAdornment, TextField } from "@/components";
import Email from "@mui/icons-material/Email";
import { TextFieldProps } from "@mui/material";

const EmailInput = (props: TextFieldProps) => {
  return (
    <TextField
      name="name"
      type="email"
      placeholder="Enter your email"
      InputProps={{
        // disabled: props.disabled,
        //
        endAdornment: (
          <InputAdornment position="end" disablePointerEvents={props.disabled}>
            <Email />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default EmailInput;
