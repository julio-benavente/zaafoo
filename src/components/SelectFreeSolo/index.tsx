import MuiAutocomplete, {
  AutocompleteProps,
  AutocompleteRenderGetTagProps,
  AutocompleteRenderInputParams,
} from "@mui/material/Autocomplete";
import cn from "@/helpers/cn";

import { Chip, TextField } from "@mui/material";
import { ReactNode } from "react";

export const renderTagsComp = (
  value: readonly string[],
  getTagProps: AutocompleteRenderGetTagProps
) =>
  value.map((option: string, index: number) => (
    <Chip
      variant="outlined"
      label={option}
      {...getTagProps({ index })}
      key={index}
    />
  ));

export const renderInputComp = (params: AutocompleteRenderInputParams) => (
  <TextField {...params} variant="outlined" />
);

const SelectInput = ({
  renderTags = renderTagsComp,
  renderInput = renderInputComp,
  className,
  classes,
  ...props
}: AutocompleteProps<string, true, boolean, true>) => {
  return (
    <MuiAutocomplete
      className={cn("", className)}
      classes={{
        ...classes,
        root: cn(
          "outline-none font-cabinet group text-black min-w-x",
          classes?.root
        ),
        inputRoot: cn(
          "px-5 py-auto min-h-[64px]",
          "[&>fieldset]:rounded-sm [&>fieldset]:border-black [&>fieldset]:border-solid [&>fieldset]:outline-none [&>fieldset]:border",
          "group-focus-within:[&>fieldset]:border-purple-500 group-focus-within:[&>fieldset]:border-2",
          classes?.inputRoot
        ),
        input: "p-0",
      }}
      multiple
      open={false}
      freeSolo
      renderTags={renderTags}
      renderInput={renderInput}
      {...props}
    />
  );
};

export default SelectInput;
