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
  return (
    <MuiTypography
      variant={variant}
      classes={{
        root: cn("font-cabinet"),
        h1: cn("text-4xl font-black lg:text-5xl text-text-headline"),
        // @ts-ignore
        link: cn("text-sm font-bold"),
        h2: cn("text-3xl font-bold lg:text-4xl text-text-headline"),
        h3: cn("text-2xl font-bold lg:text-2xl text-text-headline"),
        h4: cn("text-xl font-bold lg:text-xl font-bold text-text-headline"),
        body1: cn("text-lg text-text"),
        body2: cn("text-xl text-text"),
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
