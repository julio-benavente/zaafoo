"use client";

import { Typography } from "@/components";
import Main from "./Main";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useParams, useRouter, usePathname } from "next/navigation";
import { selectMenu } from "@/entities/menu/slice";

// export async function generateStaticParams() {
//   const posts = await fetch("https://.../posts").then((res) => res.json());

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

const SingleMenuPage = () => {
  const params = useParams();
  const menu = useSelector((state: RootState) =>
    selectMenu(state, params.menuId)
  );

  return (
    <div className="py-6 h-full">
      <div className="px-6 border-b border-black pb-4 mb-4">
        <Typography variant="h2" component="h1">
          Menu one
        </Typography>
      </div>

      <Main data={menu} />
    </div>
  );
};

export default SingleMenuPage;
