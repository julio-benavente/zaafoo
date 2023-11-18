import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import MoreNavItems from "./MoreNavItems";
import navbarLinks from "./navbarLinks";
import cn from "@/helpers/cn";
import Link from "next/link";
import { Typography } from "@/components";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import UserCard from "./UserCard";

const Sidebar = () => {
  return (
    <section className="grid bg-black grid-rows-[auto_1fr_auto] h-screen">
      <Logo />
      <nav>
        <SmallScreenNavbarLink />
        <BigScreenNavbarLink />
      </nav>
      <UserCard />
    </section>
  );
};

export default Sidebar;

const Logo = () => {
  return (
    <div className="text-white mt-6 mb-8 mx-8 text-2xl font-bold">Zaafoo</div>
  );
};

const SmallScreenNavbarLink = () => {
  return (
    <ul className="grid grid-cols-5 h-16 border-t border-black relative lg:hidden">
      {navbarLinks.slice(0, 4).map((e, i) => {
        return <NavbarItem key={i} {...e} />;
      })}
      <MoreNavItems navItems={navbarLinks.slice(4)} />
    </ul>
  );
};

const BigScreenNavbarLink = () => {
  return (
    <ul
      className={cn(
        "hidden",
        "lg:grid grid-cols-1 h-full border-t border-black relative py-4 px-4 gap-y-2  content-start"
      )}
    >
      {navbarLinks.map((e, i) => {
        return <NavbarItem key={i} {...e} />;
      })}
    </ul>
  );
};

export interface NavbarItemProps {
  path: string;
  label?: string;
  onClick?: () => any;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export const NavbarItem = (props: NavbarItemProps) => {
  return (
    <Link
      href={props.path}
      className={cn(
        "group w-full h-full grid place-items-center",
        "lg:grid-cols-[auto_1fr] lg:items-center lg:justify-start lg:place-items-stretch lg:gap-x-2 lg:py-3 lg:px-5 lg:rounded-sm text-white hover:bg-white/10 lg:h-max"
      )}
      onClick={props.onClick}
    >
      <props.icon className="group-hover:text-purple-500 lg:transition-all text-lg" />
      <p className="hidden lg:block text-sm group-hover:text-purple-500 transition-all">
        {props.label}
      </p>
    </Link>
  );
};
