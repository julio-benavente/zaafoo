import { RootState } from "@/store";
import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { initialCategoriesData } from "./initialCategoriesData";
import updateNestedProperty from "@/helpers/updateNestedProperty";

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
  menuItems: Array<MenuItemProps>;
}

export interface MenuProps {
  id: string;
  order: number;
  name: string;
  categories: Array<MenuCategoryProps>;
}

const initialState: MenuProps[] = [
  {
    id: "66109a1d-9a33-47f7-b5ae-4de3j44523ea",
    order: 0,
    name: "Menu daily",
    categories: initialCategoriesData,
  },
];

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    createCategory: (
      state,
      {
        payload: { name, menuId },
      }: PayloadAction<{ menuId: string; name: string }>
    ) => {
      const menuIndex = state.findIndex((e) => e.id === menuId);

      state[menuIndex].categories.push({
        id: uuid(),
        name: name,
        menuItems: [],
      });
    },
    updateCategory: (
      state,
      {
        payload,
      }: PayloadAction<{ menuId: string } & Partial<MenuCategoryProps>>
    ) => {
      const menuIndex = state.findIndex((e) => e.id === payload.menuId);
      const categoryIndex = state[menuIndex].categories.findIndex(
        (e) => e.id === payload.id
      );

      if (payload.name) {
        state[menuIndex].categories[categoryIndex].name = payload.name;
      }

      state[menuIndex].categories[categoryIndex].settings = {
        ...state[menuIndex].categories[categoryIndex].settings,
        ...payload.settings,
      };
    },
    deleteCategory: (
      state,
      { payload }: PayloadAction<{ menuId: string; id: string }>
    ) => {
      const menuIndex = state.findIndex((e) => e.id === payload.menuId);

      const categoryIndex = state[menuIndex].categories.findIndex(
        (e) => e.id === payload.id
      );

      const arrayCategory = state[menuIndex].categories;
      arrayCategory.splice(categoryIndex, 1);

      state[menuIndex].categories = arrayCategory;
    },
    createMenuItem: (
      state,
      {
        payload,
      }: PayloadAction<{
        menuId: string;
        categoryId: string;
        name: string;
        basePrice: string;
      }>
    ) => {
      const menuIndex = state.findIndex((e) => e.id === payload.menuId);
      const categoryIndex = state[menuIndex].categories.findIndex(
        (e) => e.id === payload.categoryId
      );

      state[menuIndex].categories[categoryIndex].menuItems?.push({
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
    updateMenuItem: (
      state,
      {
        payload,
      }: PayloadAction<{
        menuId: string;
        categoryId: string;
        id: string;
        name?: string;
        basePrice?: string;
      }>
    ) => {
      const menuIndex = state.findIndex((e) => e.id === payload.menuId);

      const categoryIndex = state[menuIndex].categories.findIndex(
        (e) => e.id === payload.categoryId
      );

      if (categoryIndex < 0) {
        return undefined;
      }

      const menuItemIndex = state[menuIndex].categories[
        categoryIndex
      ].menuItems?.findIndex((e) => e.id === payload.id);

      const element =
        state[menuIndex].categories[categoryIndex].menuItems[menuItemIndex];

      state[menuIndex].categories[categoryIndex].menuItems[menuItemIndex] =
        updateNestedProperty(element, payload);
    },
    deleteMenuItem: (
      state,
      {
        payload,
      }: PayloadAction<{ menuId: string; categoryId: string; id: string }>
    ) => {
      const menuIndex = state.findIndex((e) => e.id === payload.menuId);

      const categoryIndex = state[menuIndex].categories.findIndex(
        (e) => e.id === payload.categoryId
      );

      if (categoryIndex < 0) {
        return undefined;
      }

      const menuItemIndex = state[menuIndex].categories[
        categoryIndex
      ].menuItems?.findIndex((e) => e.id === payload.id);

      const arrayMenuItems =
        state[menuIndex].categories[categoryIndex].menuItems;
      arrayMenuItems.splice(menuItemIndex, 1);
      state[menuIndex].categories[categoryIndex].menuItems = arrayMenuItems;
    },
  },
});

export default menuSlice.reducer;
export const {
  createCategory,
  deleteCategory,
  createMenuItem,
  updateCategory,
  updateMenuItem,
  deleteMenuItem,
} = menuSlice.actions;

export const getMenus = createSelector(
  [(state: RootState) => state.menu],
  (menu) => menu
);

export const selectMenu = createSelector(
  [(state: RootState, id) => state.menu, (state, id) => id],
  (menu, id) => {
    const element = menu.find((e) => e.id === id);
    return element;
  }
);
