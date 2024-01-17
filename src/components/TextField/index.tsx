"use client";

import cn from "@/helpers/cn";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import React, { forwardRef } from "react";
// import { useFormContext, RegisterOptions } from "react-hook-form";

export interface TextFieldProps
  extends Omit<MuiTextFieldProps<"outlined">, "variant"> {
  // name?: string;
  //   registerOptions?: RegisterOptions;
  variant?: TextFieldVariants;
}

const TextField = forwardRef(
  (
    {
      variant = "outlined",
      className,
      classes,
      name,
      //   registerOptions,
      InputProps,
      ...props
    }: TextFieldProps,
    ref: any
  ) => {
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
              "group bg-transparent rounded-sm text-sm font-semibold px-5 py-5 h-16 bg-white"
            ),
            input: cn("box-border p-0 font-cabinet font-bold"),
            adornedEnd: cn("pr-0"),
            adornedStart: cn("pl-0"),
            notchedOutline: cn(
              "border border-black border-solid",
              "group-focus-within:border-purple-500 group-focus-within:border-2"
              // "group-focus-within:ring-input"
              // isError &&
              //   "border-red-500 focus:border-red-500 group-focus-within:ring-4 group-focus-within:ring-red-500/50"
            ),
            ...InputProps?.classes,
          },
          ...InputProps,
        }}
        ref={ref}
        {...props}
        //   {...register(name, { ...registerOptions })}
      />
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
