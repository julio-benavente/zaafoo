import { Button, Typography } from "@/components";
import React, { useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import MenuOptions from "./MenuOptions";
import CreateNewCategoryModal from "./CreateNewCategoryModal";
import { selectMenu, MenuItemProps } from "@/entities/menu/slice";
import { useSelector } from "react-redux";
import MenuCategory from "./MenuCategory";

const SingleMenuPage = () => {
  const [tabValue, setTabValue] = React.useState("menus");
  const menu = useSelector(selectMenu);
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  const [newCategoryModalIsOpen, setNewCategoryModalIsOpen] = useState(false);

  return (
    <div className="py-6 h-full">
      <div className="px-6 border-b border-black pb-4 mb-4">
        <Typography variant="h2" component="h1">
          Menu one
        </Typography>
      </div>

      <div className="px-6">
        <div className="grid justify-end mb-4">
          <Button size="small" onClick={() => setNewCategoryModalIsOpen(true)}>
            <ControlPointIcon className="text-lg mr-2" />
            Create new category
          </Button>
        </div>
        {menu.categories?.map((category) => {
          return <MenuCategory key={category.id} {...category} />;
        })}
      </div>
      <CreateNewCategoryModal
        open={newCategoryModalIsOpen}
        setOpen={setNewCategoryModalIsOpen}
      />
    </div>
  );
};

export default SingleMenuPage;
