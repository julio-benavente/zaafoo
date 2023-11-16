"use client";

import cn from "@/helpers/cn";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import React from "react";
// import { useFormContext, RegisterOptions } from "react-hook-form";

interface TextFieldProps
  extends Omit<MuiTextFieldProps<"outlined">, "variant"> {
  name: string;
  //   registerOptions?: RegisterOptions;
  variant?: TextFieldVariants;
}

const TextField = ({
  variant = "outlined",
  className,
  name,
  //   registerOptions,
  InputProps,
  ...props
}: TextFieldProps) => {
  //   const {
  //     register,
  //     formState: { errors },
  //   } = useFormContext();

  //   const isError = Boolean(errors[name]);
  return (
    <MuiTextField
      className={className}
      placeholder="Placeholder"
      classes={{ root: "w-full" }}
      InputProps={{
        classes: {
          root: cn(
            "group bg-transparent rounded-sm text-sm font-semibold px-5 py-5 h-16"
          ),
          input: cn("box-border p-0"),
          adornedEnd: cn("pr-0"),
          adornedStart: cn("pl-0"),
          notchedOutline: cn(
            "border border-black border-solid group-focus-within:border-purple-500"
            // "group-focus-within:ring-input"
            // isError &&
            //   "border-red-500 focus:border-red-500 group-focus-within:ring-4 group-focus-within:ring-red-500/50"
          ),
          ...InputProps?.classes,
        },
        ...InputProps,
      }}
      {...props}
      //   {...register(name, { ...registerOptions })}
    />
  );
};

export default TextField;
