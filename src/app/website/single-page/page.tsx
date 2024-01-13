import { Typography } from "@/components";
import { initialCategoriesData } from "@/entities/menu/initialCategoriesData";
import { MenuCategoryProps, MenuItemProps } from "@/entities/menu/slice";
import React from "react";

const page = () => {
  return (
    <section className="bg-orange-100 min-h-screen">
      <div className="">
        <div className="container pb-4 ">
          <div>
            <Typography variant="h1">The Best Restaurant</Typography>
            <Typography variant="h2" className="font-normal">
              Daily Menu
            </Typography>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container pt-4">
          <div className="mt-8 grid gap-12">
            {initialCategoriesData.map((category: MenuCategoryProps) => {
              return <Category key={category.id} {...category} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

const Category = (props: MenuCategoryProps) => {
  return (
    <div>
      <div className="bg-orange-800 p-4 rounded">
        <Typography variant="h3" className="text-white">
          {props.name}
        </Typography>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-4">
        {props.menuItems.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

const MenuItem = (props: MenuItemProps) => {
  return (
    <div className="border-2 border-black rounded p-6 bg-orange-50">
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <Typography className="">{props.name}</Typography>
        <Typography className="font-bold">$ {props.basePrice}</Typography>
      </div>
    </div>
  );
};
