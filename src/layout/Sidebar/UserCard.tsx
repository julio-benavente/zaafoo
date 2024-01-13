"use client";

import navbarLinks from "./navbarLinks";
import cn from "@/helpers/cn";
import Link from "next/link";
import { Typography } from "@/components";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { useState } from "react";

const UserCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden relative mx-4 my-4 lg:block">
      <div
        className={cn(
          "relative py-3 px-5 rounded-sm text-white hover:bg-white/10 h-max grid grid-cols-[auto_1fr_auto] gap-x-2 items-center cursor-pointer"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 aspect-square bg-slate-400 rounded-full"></div>
        <Typography className="text-white text-sm font-bold">
          Henry Richardson
        </Typography>
        {/* <div className="h-full" onClick={() => setIsOpen(!isOpen)}>
          <MoreHoriz />
        </div> */}
      </div>

      {isOpen && (
        <div className="grid grid-cols-1 border border-black absolute -top-2 -translate-y-full min-w-[180px] z-10 right-0 bg-white rounded-sm overflow-hidden">
          {navbarLinks.map((e) => {
            return (
              <Link
                key={e.label}
                href={e.path}
                className="py-2 px-4 border-black [&:not(:last-of-type)]:border-b grid grid-cols-[auto_1fr] gap-x-2 hover:bg-purple-700 text-black hover:text-white text-sm items-center"
              >
                {<e.icon />}
                {e.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserCard;
