import React from "react";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import NextLink from "next/link";
import cn from "@/helpers/cn";

interface LinkProps extends MuiLinkProps {
  external?: boolean;
  type?: "standard" | "action" | "menu";
  target?: React.HTMLAttributeAnchorTarget;
}

const Link = ({
  className,
  external = false,
  type = "standard",
  target,
  href,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      href={String(href)}
      passHref
      target={target}
      className={cn(
        "focus:after:inline-block outline-none w-fit relative",
        "after:w-[calc(100%+6px)] after:h-[calc(100%+4px)] after:border after:border-black after:border-solid after:z-10 after:-top-0.5 after:-left-[3px] after:hidden after:absolute"
      )}
    >
      <MuiLink
        className={cn(
          "text-black font-mediumZ hover:text-text-headline no-underline relative max-w-fit h-fit",
          type === "standard" && "hover:underline hover:underline-offset-2",
          type === "action" && [
            "hover:after:bg-gray-700",
            "after:w-full after:h-0.5 after:bg-black after:absolute after:left-0 after:-bottom-0.5 after:hover:w-0",
            "before:h-0.5 before:bg-black before:absolute before:left-0 before:-bottom-0.5 before:hover:animate-linkunderline before:hover:bg-text-headline",
          ],
          className
        )}
        component="span"
        {...props}
      >
        {props.children}
      </MuiLink>
    </NextLink>
  );
};

export default Link;
