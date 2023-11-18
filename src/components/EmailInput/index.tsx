import { InputAdornment, TextField } from "@/components";
import Email from "@mui/icons-material/Email";

const EmailInput = () => {
  return (
    <TextField
      name="name"
      type="email"
      placeholder="Enter your email"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Email />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default EmailInput;
