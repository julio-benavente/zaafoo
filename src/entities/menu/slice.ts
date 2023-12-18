import { RootState } from "@/store";
import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface CategorySettings {}
export interface MenuItemVariant {
  name: string;
  attributes: Array<string>;
}

export interface MenuItemProps {
  id: string;
  name: string;
  basePrice: string;
  variants?: MenuItemVariant[];
  settings: {
    isVisible: boolean;
    isForAdultsOnly: boolean;
    isAvailableAtSpecificDatesAndTime: boolean;
  };
}

export interface MenuCategoryProps {
  id: string;
  name: string;
  settings?: CategorySettings;
  menuItems?: Array<MenuItemProps>;
}

export interface MenuState {
  basePrice: string;
  categories: Array<MenuCategoryProps>;
}

const initialState: MenuState = {
  basePrice: "0.00",
  categories: [
    {
      id: uuid(),
      name: "Desayunos",
      menuItems: [
        {
          id: uuid(),
          basePrice: "15.00",
          name: "Pan con palta",
          settings: {
            isVisible: true,
            isForAdultsOnly: false,
            isAvailableAtSpecificDatesAndTime: false,
          },
        },
        {
          id: uuid(),
          basePrice: "20.00",
          name: "Pan con pollo",
          settings: {
            isVisible: true,
            isForAdultsOnly: false,
            isAvailableAtSpecificDatesAndTime: false,
          },
        },
        {
          id: uuid(),
          basePrice: "9.00",
          name: "Pan con salchicha",
          settings: {
            isVisible: true,
            isForAdultsOnly: false,
            isAvailableAtSpecificDatesAndTime: false,
          },
        },
      ],
      settings: {},
    },
    {
      id: uuid(),
      name: "Lonches",
      menuItems: [
        {
          id: uuid(),
          basePrice: "15.00",
          name: "Pan con palta",
          settings: {
            isVisible: true,
            isForAdultsOnly: false,
            isAvailableAtSpecificDatesAndTime: false,
          },
        },
        {
          id: uuid(),
          basePrice: "20.00",
          name: "Pan con pollo",
          settings: {
            isVisible: true,
            isForAdultsOnly: false,
            isAvailableAtSpecificDatesAndTime: false,
          },
        },
        {
          id: uuid(),
          basePrice: "9.00",
          name: "Pan con salchicha",
          settings: {
            isVisible: true,
            isForAdultsOnly: false,
            isAvailableAtSpecificDatesAndTime: false,
          },
        },
      ],
      settings: {},
    },
  ],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    updateMenu: (state, action) => {
      state.basePrice = action.payload.basePrice;
    },
    createCategory: (
      state,
      { payload: { name } }: PayloadAction<{ name: string }>
    ) => {
      state.categories.push({ id: uuid(), name: name, menuItems: [] });
    },
  },
});

export default menuSlice.reducer;
export const { updateMenu, createCategory } = menuSlice.actions;

export const selectMenu = createSelector(
  [(state: RootState) => state.menu],
  (menu) => menu
);
