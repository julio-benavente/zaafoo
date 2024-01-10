"use client";

import React from "react";
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material/Checkbox";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import cn from "@/helpers/cn";
import Check from "@mui/icons-material/Check";
import Typography from "@/components/Typography";
// import { RegisterOptions, useFormContext } from "react-hook-form";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
type LabelProps = Optional<FormControlLabelProps, "control">;

interface CheckboxProps {
  // name: string;
  // registerOptions?: RegisterOptions;
  checkboxProps?: MuiCheckboxProps;
  labelProps?: LabelProps;
}

const Checkbox = ({
  checkboxProps = {},
  // name,
  // registerOptions,
  labelProps,
  ...props
}: CheckboxProps) => {
  const {
    className: formControlClassName,
    label,
    control,
    ...restLabelProps
  } = labelProps || {};
  const { className: checkboxClassName, ...restCheckboxProps } = checkboxProps;
  // const { register } = useFormContext();

  return (
    <FormControlLabel
      className={cn("group relative m-0 w-fit", formControlClassName)}
      label={
        <Typography
          className={cn(
            "relative pl-7 text-sm font-bold",
            "group-focus-within:underline group-focus-within:underline-offset-2"
          )}
        >
          {label}
        </Typography>
      }
      control={
        <MuiCheckbox
          disableRipple
          icon={<></>}
          checkedIcon={
            <Check
              className={cn(
                "text-sm text-white",
                labelProps?.disabled && "text-gray-600"
              )}
            />
          }
          checked={Boolean(labelProps?.value)}
          classes={{
            root: cn(
              "group absolute top-0 rounded-[1px] border border-black border-solid w-5 h-5"
            ),
            disabled: "[&]:bg-gray-200 border-gray-600 text-gray-600",
            checked: cn("bg-green-400 border-green-400"),
          }}
          {...restCheckboxProps}
          // {...register(name, { ...registerOptions })}
        />
      }
      {...restLabelProps}
    />
  );
};

export default Checkbox;
