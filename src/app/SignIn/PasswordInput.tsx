"use client";

import { InputAdornment, TextField } from "@/components";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { InputContainer } from "./page";

const PasswordInput = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField
      name="password"
      type={isVisible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            className="cursor-pointer hover:text-purple-500"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
