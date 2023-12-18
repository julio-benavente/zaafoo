import React, { ReactNode } from "react";

interface SingleMenuState {
  // menu: MenuState;
  // variants: VariantsState;
  // settings: SettingsState;
}

interface SingleMenuApi {
  // menu: MenuApi;
  // variants: VariantsApi;
  // settings: SettingsApi;
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

const MenuOptionsStateCtx = React.createContext<SingleMenuState | null>(null);
const MenuOptionsApiCtx = React.createContext<SingleMenuApi | null>(null);

// custom provider
const MenuOptionsProvider = ({ children }: { children: ReactNode }) => {
  const MenuOptionsInitialState: SingleMenuState = {
    menu: {},
    variants: {
      addVariantModalIsOpen: false,
    },
    settings: {},
  };
  const [menuOptions, setMenuOptions] = React.useState<SingleMenuState>(
    MenuOptionsInitialState
  );

  const api: SingleMenuApi = React.useMemo(
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
    [setMenuOptions]
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
