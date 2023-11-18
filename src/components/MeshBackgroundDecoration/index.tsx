import Image from "next/image";
import React from "react";
import MeshBackgroundDecorationImage from "@/../public/assets/images/mesh-background-decoration.png";

const MeshBackgroundDecoration = () => {
  return (
    <Image
      src={MeshBackgroundDecorationImage}
      alt=""
      className="absolute w-lg -right-40 -top-60 -z-10 md:top-20 xl:right-0 2xl:right-20 2xl:w-xl 2xl:-rotate-12"
      placeholder="blur"
    />
  );
};

export default MeshBackgroundDecoration;
