import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import MoreNavItems from "./MoreNavItems";
import navbarLinks from "./navbarLinks";

const Sidebar = () => {
  return (
    <section className="">
      <div className="">
        <div className="">
          <nav>
            <ul className="grid grid-cols-5 h-16 border-t border-black relative">
              {navbarLinks.slice(0, 4).map((e, i) => {
                return <NavbarItem key={i} {...e} />;
              })}
              <MoreNavItems navItems={navbarLinks.slice(4)} />
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

export interface NavbarItemProps {
  path: string;
  label?: string;
  onClick?: () => any;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export const NavbarItem = (props: NavbarItemProps) => {
  return (
    <div
      className="group w-full h-full grid place-items-center"
      onClick={props.onClick}
    >
      <props.icon className="group-hover:text-purple-700 lg:transition-all" />
    </div>
  );
};
