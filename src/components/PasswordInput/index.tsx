"use client";

import { InputAdornment, TextField } from "@/components";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { TextFieldProps } from "@/components/TextField";

const PasswordInput = ({ name = "password", ...props }: TextFieldProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField
      name={name}
      type={isVisible ? "text" : "password"}
      placeholder="Enter your password"
      InputProps={{
        endAdornment: (
          <InputAdornment
            disablePointerEvents={props.disabled}
            position="end"
            className="cursor-pointer hover:text-purple-500"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordInput;
