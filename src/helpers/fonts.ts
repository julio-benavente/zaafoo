import localFont from "next/font/local";

export const cabinet = localFont({
  src: [
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-cabinet",
  display: "swap",
});
