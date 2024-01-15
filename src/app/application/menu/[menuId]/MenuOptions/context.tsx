import React, { ReactNode } from "react";

interface MenuOptionsState {
  menu: MenuState;
  variants: VariantsState;
  settings: SettingsState;
}

interface MenuOptionsApi {
  menu: MenuApi;
  variants: VariantsApi;
  settings: SettingsApi;
}

interface VariantsState {
  addVariantModalIsOpen: boolean;
}

interface VariantsApi {
  openAddVariantModal: () => void;
  closeAddVariantModal: () => void;
}

interface MenuState {}
interface MenuApi {}

interface SettingsState {}
interface SettingsApi {}

const MenuOptionsStateCtx = React.createContext<MenuOptionsState | null>(null);
const MenuOptionsApiCtx = React.createContext<MenuOptionsApi | null>(null);

// custom provider
const MenuOptionsProvider = ({ children }: { children: ReactNode }) => {
  const MenuOptionsInitialState: MenuOptionsState = {
    menu: {},
    variants: {
      addVariantModalIsOpen: false,
    },
    settings: {},
  };
  const [menuOptions, setMenuOptions] = React.useState<MenuOptionsState>(
    MenuOptionsInitialState
  );

  const api: MenuOptionsApi = React.useMemo(
    () => ({
      menu: {},
      settings: {},
      variants: {
        openAddVariantModal: () =>
          setMenuOptions({
            ...menuOptions,
            variants: {
              ...menuOptions.variants,
              addVariantModalIsOpen: true,
            },
          }),
        closeAddVariantModal: () =>
          setMenuOptions({
            ...menuOptions,
            variants: {
              ...menuOptions.variants,
              addVariantModalIsOpen: false,
            },
          }),
      },
    }),
    [setMenuOptions, menuOptions]
  );

  return (
    <MenuOptionsStateCtx.Provider value={menuOptions}>
      <MenuOptionsApiCtx.Provider value={api}>
        {children}
      </MenuOptionsApiCtx.Provider>
    </MenuOptionsStateCtx.Provider>
  );
};

export default MenuOptionsProvider;

// custom hook for the value
export const useMenuOptionsState = () => {
  const ctx = React.useContext(MenuOptionsStateCtx);

  if (!ctx) {
    throw new Error(
      "useSpicyState must be used within the MenuOptionsProvider"
    );
  }

  return ctx;
};

// custom hook for the api
export const useMenuOptionsApi = () => {
  const ctx = React.useContext(MenuOptionsApiCtx);

  if (!ctx) {
    throw new Error("useSpicyApi must be used within the MenuOptionsProvider");
  }

  return ctx;
};
