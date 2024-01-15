import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./index";
import OptionsButton from "../OptionsButton";
import { useEffect, useRef, useState } from "react";
import MenuItem from "../MenuItem";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  //   parameters: {
  // layout: "centered",
  //   },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
export const DefaultOn: Story = {};
DefaultOn.args = {
  open: true,
  children: (
    <>
      <MenuItem variant="option">One</MenuItem>
      <MenuItem variant="option">One</MenuItem>
      <MenuItem variant="option">One</MenuItem>
      <MenuItem variant="option">One</MenuItem>
    </>
  ),
};

const WithOptionsButtonWithHooks = () => {
  const anchorRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const closeMenu = () => setMenuIsOpen(false);
  return (
    <div className="relative">
      <OptionsButton
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        ref={anchorRef}
      />
      <Menu
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        anchorEl={anchorRef.current}
      >
        <MenuItem variant="option" onClick={closeMenu}>
          One
        </MenuItem>
        <MenuItem variant="option" onClick={closeMenu}>
          One
        </MenuItem>
        <MenuItem variant="option" onClick={closeMenu}>
          One
        </MenuItem>
        <MenuItem variant="option" onClick={closeMenu}>
          One
        </MenuItem>
      </Menu>
    </div>
  );
};

export const WithOptionsButton: Story = {
  render: () => {
    return <WithOptionsButtonWithHooks />;
  },
};

WithOptionsButton.parameters = {
  // layout: "centered",
};

WithOptionsButton.decorators = [
  (Story) => {
    return (
      <div className="p-20">
        {" "}
        <Story />
      </div>
    );
  },
];
