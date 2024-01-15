"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import CategoryModal from "../CategoryModal";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { MenuProps, selectMenu } from "@/entities/menu/slice";
import { Button } from "@/components";
import { useParams } from "next/navigation";
import { RootState } from "@/store";
import MenuCategory from "../MenuCategory";

const Main = ({ data }: { data: MenuProps }) => {
  const [newCategoryModalIsOpen, setNewCategoryModalIsOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="px-6">
        <div className="grid justify-end mb-4">
          <Button size="small" onClick={() => setNewCategoryModalIsOpen(true)}>
            <ControlPointIcon className="text-lg mr-2" />
            Create new category
          </Button>
        </div>
        {data &&
          data.categories?.map((category) => {
            return (
              <MenuCategory menuId={data.id} key={category.id} {...category} />
            );
          })}
      </div>
      <CategoryModal
        menuId={data.id}
        open={newCategoryModalIsOpen}
        setOpen={setNewCategoryModalIsOpen}
        variant="create"
      />
    </>
  );
};

export default Main;
