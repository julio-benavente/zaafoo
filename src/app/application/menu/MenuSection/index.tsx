import { Button, Typography } from "@/components";
import { useState } from "react";
import VerifiedUserOutlined from "@mui/icons-material/VerifiedUserOutlined";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import CreateMenuModal from "../MenuModal/CreateMenuModal";
import MenuRow from "./MenuRow";

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
        <div className="grid grid-cols-1 w-full">
          {menus.map((menu) => {
            return <MenuRow key={menu.id} menu={menu} />;
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
