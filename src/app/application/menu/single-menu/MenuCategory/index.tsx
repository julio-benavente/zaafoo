import {
  IconButton,
  Menu,
  MenuItem,
  OptionsButton,
  Typography,
} from "@/components";
import { useRef, useState } from "react";
import { MenuCategoryProps, deleteCategory } from "@/entities/menu/slice";
import MenuItemComponent from "../MenuItem";
import cn from "@/helpers/cn";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import CreateMenuItemModal from "../MenuOptions/MenuItemModal";
import CategoryModal from "../CategoryModal";
import DeleteCategoryModal from "../DeleteCategoryModal";
import useFakeRequest from "@/helpers/fakeRequest";
import succesfullSnackbar from "@/helpers/succesfulSnackbar";
import errorSnackbar from "@/helpers/errorSnackbar";
import { useDispatch } from "react-redux";

const MenuCategory = (props: MenuCategoryProps) => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const toggleMenuItemsDisplay = () => {
    setShowMenuItems(!showMenuItems);
    closeMenu();
  };

  const anchorRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const closeMenu = () => setMenuIsOpen(false);

  const [newItemModalIsOpen, setNewItemModalIsOpen] = useState(false);
  const handleAddNewItem = () => {
    setNewItemModalIsOpen(true);
    closeMenu();
  };

  const [editCategoryModalIsOpen, setEditCategoryModalIsOpen] = useState(false);
  const openEditCategoryModal = () => {
    setEditCategoryModalIsOpen(true);
    closeMenu();
  };

  const [deleteCategoryModalIsOpen, setDeleteCategoryModalIsOpen] =
    useState(false);
  const openDeleteCategoryModal = () => {
    setDeleteCategoryModalIsOpen(true);
    closeMenu();
  };

  const [deleteCategoryFakeResponse, deleteCategoryFakeRequest] =
    useFakeRequest();

  const dispatch = useDispatch();

  return (
    <div className="mb-8">
      <div
        className={cn(
          "py-4 px-4 bg-white border border-black border-solid border-b-0 grid grid-cols-[auto_1fr_auto] gap-3 items-center",
          !showMenuItems && "border-b"
        )}
      >
        <IconButton onClick={toggleMenuItemsDisplay}>
          {!showMenuItems && <UnfoldMoreOutlinedIcon />}
          {showMenuItems && <UnfoldLessIcon />}
        </IconButton>
        <div className="w-full grid grid-flow-row sm:grid-flow-col sm:justify-start sm:items-center">
          <Typography className="font-bold text-base" component={"span"}>
            {props.name}
          </Typography>{" "}
          <Typography
            variant="caption"
            component={"span"}
            className="sm:pl-2 text-gray-600"
          >
            {props.menuItems?.length}{" "}
            {props.menuItems?.length === 1 ? "item" : "items"}
          </Typography>
        </div>

        <OptionsButton
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          ref={anchorRef}
        />
        <Menu
          open={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
          anchorEl={anchorRef.current}
        >
          <MenuItem variant="option" onClick={toggleMenuItemsDisplay}>
            {!showMenuItems && (
              <>
                <UnfoldMoreOutlinedIcon className="text-lg mr-2" /> Expand items
              </>
            )}
            {showMenuItems && (
              <>
                <UnfoldLessIcon className="text-lg mr-2" /> Collapse items
              </>
            )}
          </MenuItem>
          <MenuItem variant="option" onClick={handleAddNewItem}>
            <ControlPointOutlinedIcon className="text-lg mr-2" /> Add New Item
          </MenuItem>
          <MenuItem variant="option" onClick={openEditCategoryModal}>
            <EditOutlinedIcon className="text-lg mr-2" /> Edit Category
          </MenuItem>
          <MenuItem
            variant="option"
            onClick={openDeleteCategoryModal}
            classes={{ root: "text-red-500 hover:bg-red-200" }}
          >
            <DeleteOutlineIcon className="text-lg mr-2" /> Delete Category
          </MenuItem>
        </Menu>
      </div>
      {showMenuItems &&
        props.menuItems?.map((product, i) => {
          return (
            <MenuItemComponent
              key={product.id}
              categoryId={props.id}
              {...product}
            />
          );
        })}

      <CategoryModal
        open={editCategoryModalIsOpen}
        setOpen={setEditCategoryModalIsOpen}
        variant="update"
        categoryProps={{ id: props.id, name: props.name }}
      />

      <DeleteCategoryModal
        open={deleteCategoryModalIsOpen}
        category={props.name}
        primaryButtonProps={{
          children:
            deleteCategoryFakeResponse === "loading"
              ? "Deleting ..."
              : "Delete",
          disabled: deleteCategoryFakeResponse === "loading",
          onClick: async () => {
            const response = await deleteCategoryFakeRequest();

            if (response === "success") {
              dispatch(deleteCategory({ id: props.id }));
              succesfullSnackbar(
                `${props.name} category was successfully deleted.`
              );
              setDeleteCategoryModalIsOpen(false);
            } else {
              errorSnackbar(`There's a problem. Try it again.`);
            }
          },
        }}
        secondaryButtonProps={{
          children: "Cancel",
          disabled: deleteCategoryFakeResponse === "loading",
          onClick: () => {
            setDeleteCategoryModalIsOpen(false);
          },
        }}
      />

      <CreateMenuItemModal
        categoryId={props.id}
        variant="create"
        open={newItemModalIsOpen}
        setOpen={setNewItemModalIsOpen}
      />
    </div>
  );
};

export default MenuCategory;
