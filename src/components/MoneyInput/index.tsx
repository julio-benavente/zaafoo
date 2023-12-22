import {
  NumericFormat,
  NumberFormatBaseProps,
  NumericFormatProps,
} from "react-number-format";
import { TextField } from "..";
import { TextFieldProps } from "../TextField";

interface IProps {
  textFieldProps?: TextFieldProps;
}

const MoneyInput = ({ ...props }: NumericFormatProps) => {
  return (
    <NumericFormat
      //@ts-ignore
      customInput={TextField}
      prefix="$ "
      decimalSeparator="."
      thousandSeparator=","
      decimalScale={2}
      fixedDecimalScale
      allowLeadingZeros={false}
      {...props}
    />
  );
};

export default MoneyInput;
