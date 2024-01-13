import React from "react";
import { redirect } from "next/navigation";

const AppPage = () => {
  redirect("/application/menu");
  return <div></div>;
};

export default AppPage;
