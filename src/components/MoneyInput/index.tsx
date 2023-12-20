import {
  NumericFormat,
  NumericFormatProps,
  NumberFormatBaseProps,
} from "react-number-format";
import { TextField } from "..";
import { TextFieldProps } from "../TextField";

interface IProps extends NumberFormatBaseProps {
  textFieldProps?: TextFieldProps;
}

const MoneyInput = (props: IProps) => {
  return (
    <NumericFormat
      customInput={(args) => {
        // @ts-ignore
        return <TextField {...args} {...props.textFieldProps} />;
      }}
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
