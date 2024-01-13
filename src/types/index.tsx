export interface MenuProps {
  name: string;
  categories: Array<MenuCategoryProps>;
}

// export interface CategorySettings {}

// export interface MenuItemVariant {
//   name: string;
//   attributes: Array<string>;
// }

export interface MenuItemProps {
  id: string;
  name: string;
  basePrice: string;
  //   variants?: MenuItemVariant[];
  settings: {
    isVisible: boolean;
    isForAdultsOnly: boolean;
    isAvailableAtSpecificDatesAndTime: boolean;
  };
}

export interface MenuCategoryProps {
  id: string;
  items: Array<MenuItemProps>;
  name: string;
  //   settings?: CategorySettings;
}
