import {
  Button,
  InputContainer,
  InputLabel,
  StandardModal,
  TextField,
  Typography,
} from "@/components";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import VerifiedUserOutlined from "@mui/icons-material/VerifiedUserOutlined";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Modal from "@mui/material/Modal";
import cn from "@/helpers/cn";
import { useDispatch, useSelector } from "react-redux";
import { MenuProps, getMenus } from "@/entities/menu/slice";
import { RootState } from "@/store";

const MenuSection = () => {
  const [createMenuModalIsOpen, setCreateMenuModalIsOpen] = useState(false);
  const openModal = () => setCreateMenuModalIsOpen(true);
  const closeModal = () => setCreateMenuModalIsOpen(false);

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

      <CreateMenuModal
        open={createMenuModalIsOpen}
        setOpen={setCreateMenuModalIsOpen}
      />
    </>
  );
};

export default MenuSection;

interface CreateMenuModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateMenuModal = (props: CreateMenuModal) => {
  const closeModal = () => {
    props.setOpen && props.setOpen(false);
  };

  return (
    <form>
      <StandardModal
        title="Create menu"
        open={props.open}
        onClose={closeModal}
        primaryButtonProps={{
          children: "Create",
          onClick: closeModal,
        }}
        secondaryButtonProps={{
          children: "Cancel",
          onClick: closeModal,
        }}
      >
        <div>
          <InputContainer>
            <InputLabel>Name</InputLabel>
            <TextField placeholder="Your menu's name" />
          </InputContainer>
        </div>
      </StandardModal>
    </form>
  );
};
