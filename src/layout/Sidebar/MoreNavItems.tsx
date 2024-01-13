"use client";

import { useState } from "react";
import { NavbarItemProps } from ".";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";

const MoreNavItems = ({ navItems }: { navItems: NavbarItemProps[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="group w-full h-full grid place-items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MoreHorizIcon className="group-hover:text-purple-700 lg:transition-all" />
      </div>
      {isOpen && (
        <div className="grid grid-cols-1 border border-black absolute -top-2 right-2 -translate-y-full min-w-[180px]">
          {navItems.map((e) => {
            return (
              <Link
                key={e.label}
                href={e.path}
                className="py-2 px-4 border-black [&:not(:last-of-type)]:border-b grid grid-cols-[auto_1fr] gap-x-2 hover:bg-purple-700 hover:text-white"
              >
                {<e.icon />}
                {e.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MoreNavItems;
