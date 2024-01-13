import {
  Button,
  InputContainer,
  InputLabel,
  TextField,
  Typography,
} from "@/components";
import Link from "next/link";
import { useState } from "react";
import VerifiedUserOutlined from "@mui/icons-material/VerifiedUserOutlined";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Modal from "@mui/material/Modal";
import cn from "@/helpers/cn";
import { useDispatch, useSelector } from "react-redux";
import { MenuProps, getMenus } from "@/entities/menu/slice";
import { RootState } from "@/store";

const MenuSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const dispatch = useDispatch();
  const menus = useSelector((state: RootState) => state.menu);
  // const menus = [];

  return (
    <>
      <div className="grid justify-end mb-4">
        <Button size="small" onClick={openModal}>
          <ControlPointIcon className="text-lg mr-2" />
          Create a Menu
        </Button>
      </div>

      {menus.length === 0 && (
        <div className="mt-20 text-center md:mt-32">
          <VerifiedUserOutlined className="text-[140px] mb-4 " />
          <Typography variant="h2" className="">
            The are no menus created
          </Typography>
          <Typography className="mb-8">
            Create one menu listing and start adding products
          </Typography>
          <Button className="mx-auto" onClick={openModal}>
            <ControlPointIcon className="text-lg mr-2" />
            Create a Menu
          </Button>
        </div>
      )}
      {menus.length > 0 && (
        <div className="grid grid-cols-1">
          {menus.map((e) => {
            const numberOfProducts = e.categories.reduce((a, b) => {
              return a + b.menuItems.length;
            }, 0);

            return (
              <Link
                href={`/application/menu/${e.id}`}
                key={e.id}
                className="py-3 px-4 border border-black [&:not(:last-of-type)]:border-b-0 bg-white cursor-pointer hover:bg-purple-50 block"
              >
                <div>
                  <Typography className="font-bold">{e.name}</Typography>
                  <Typography className="text-sm text-gray-700">
                    {e.categories.length} categories - {numberOfProducts}{" "}
                    products
                  </Typography>
                </div>
                <div></div>
              </Link>
            );
          })}
        </div>
      )}

      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        classes={{ backdrop: "bg-black/90" }}
      >
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none",
            "bg-white rounded-sm w-[calc(100%-10vw)] sm:w-auto sm:min-w-lg"
          )}
        >
          <div className="py-3 px-5 border-b border-black">
            <Typography className="font-bold">Create a new menu</Typography>
          </div>
          <div className="py-5 px-5">
            <InputContainer>
              <InputLabel>Name</InputLabel>
              <TextField placeholder="Your menu's name" />
            </InputContainer>

            <div className="grid grid-flow-col auto-cols-fr w-fit mt-8 gap-x-4 ml-auto">
              <Button variant="outlined" onClick={closeModal}>
                Cancel
              </Button>
              <Button onClick={closeModal}>Create menu</Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MenuSection;

const menuList = [
  {
    name: "Menu one",
    path: "/menu-one",
  },
  //   {
  //     name: "Menu two",
  //     path: "/menu-two",
  //   },
  //   {
  //     name: "Menu three",
  //     path: "/menu-three",
  //   },
  //   {
  //     name: "Menu four",
  //     path: "/menu-four",
  //   },
];
