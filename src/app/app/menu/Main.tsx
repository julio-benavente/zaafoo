"use client";

import {
  Button,
  InputContainer,
  InputLabel,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@/components";
import Link from "next/link";
import React, { useState } from "react";
import VerifiedUserOutlined from "@mui/icons-material/VerifiedUserOutlined";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Modal from "@mui/material/Modal";
import cn from "@/helpers/cn";

const Main = () => {
  const [tabValue, setTabValue] = React.useState("settings");
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  console.log(tabValue);

  return (
    <div className="px-6">
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        className="mb-4"
      >
        <Tab label="Menus" value="menus" />
        <Tab label="Settings" value="settings" />
      </Tabs>
      {tabValue === "menus" && <MenuSection />}
      {tabValue === "settings" && <SettingsSection />}
    </div>
  );
};

export default Main;

const SettingsSection = () => {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <TextField placeholder="Your menu's name" />
      </InputContainer>
    </div>
  );
};

const MenuSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <div className="grid justify-end mb-4">
        <Button size="small" onClick={openModal}>
          <ControlPointIcon className="text-lg mr-2" />
          Create a Menu
        </Button>
      </div>

      {menuList.length === 0 && (
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
      {menuList.length > 0 && (
        <div className="grid grid-cols-1">
          {menuList.map((e) => {
            return (
              <Link
                href={e.path}
                key={e.name}
                className="py-3 px-4 border border-black [&:not(:last-of-type)]:border-b-0 bg-white cursor-pointer hover:bg-purple-50 block"
              >
                <div>
                  <Typography className="font-bold">{e.name}</Typography>
                  <Typography className="text-sm text-gray-700">
                    2 categories - 30 products
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

const menuList = [
  //   {
  //     name: "Menu one",
  //     path: "/menu-one",
  //   },
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
