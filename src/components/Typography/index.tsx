import React from "react";
import MuiTypography, {
  TypographyProps,
  TypographyPropsVariantOverrides,
} from "@mui/material/Typography";
import cn from "@/helpers/cn";

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    link: true;
  }
}
const Typography = ({
  className,
  classes,
  variant = "body1",
  ...props
}: TypographyProps) => {
  const component = () => {
    const isParragraph = [
      "body1",
      "body2",
      "subtitle1",
      "subtitle2",
      "caption",
    ].includes(variant);

    if (isParragraph) return "p";
    return null;
  };
  return (
    <MuiTypography
      variant={variant}
      component={component()}
      classes={{
        root: cn("font-cabinet"),
        h1: cn(
          "text-3xl font-black lg:text-5xl text-text-headline md:text-4xl"
        ),
        // @ts-ignore
        link: cn("text-sm font-bold"),
        h2: cn("text-2xl font-black text-text-headline md:text-3xl"),
        h3: cn("text-xl font-black text-text-headline md:text-2xl"),
        h4: cn("text-lg font-bold font-bold text-text-headline md:text-xl"),
        body1: cn("text-lg text-text"),
        body2: cn("text-lg text-text lg:text-xl"),
        subtitle1: cn("text-lg text-text"),
        subtitle2: cn("text-xl font-normal text-text"),
        caption: cn("text-sm leading-snug"),

        ...classes,
      }}
      className={cn(className)}
      {...props}
    >
      {props.children}
    </MuiTypography>
  );
};

export default Typography;
