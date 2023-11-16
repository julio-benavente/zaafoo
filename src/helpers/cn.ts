import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...props: any) => {
  return twMerge(clsx(...props));
};

export default cn;
