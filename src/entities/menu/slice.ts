import { RootState } from "@/store";
import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { initialCategoriesData } from "./initialCategoriesData";

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
  categories: initialCategoriesData,
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
    updateCategory: (state, { payload }: PayloadAction<MenuCategoryProps>) => {
      const categoryIndex = state.categories.findIndex(
        (e) => e.id === payload.id
      );

      console.log(categoryIndex);

      state.categories[categoryIndex].name = payload.name;
      state.categories[categoryIndex].settings = {
        ...state.categories[categoryIndex].settings,
        ...payload.settings,
      };

      return state;
    },
    createMenuItem: (
      state,
      {
        payload,
      }: PayloadAction<{ categoryId: string; name: string; basePrice: string }>
    ) => {
      const categoryIndex = state.categories.findIndex(
        (e) => e.id === payload.categoryId
      );

      state.categories[categoryIndex].menuItems?.push({
        id: uuid(),
        basePrice: payload.basePrice,
        name: payload.name,
        settings: {
          isVisible: false,
          isForAdultsOnly: false,
          isAvailableAtSpecificDatesAndTime: false,
        },
        variants: [],
      });
    },
  },
});

export default menuSlice.reducer;
export const { updateMenu, createCategory, createMenuItem, updateCategory } =
  menuSlice.actions;

export const selectMenu = createSelector(
  [(state: RootState) => state.menu],
  (menu) => menu
);
