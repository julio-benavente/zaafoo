import type { Metadata } from "next";
import { cabinet } from "@/helpers/fonts";
import ThemeProvider from "@/helpers/ThemeProvider";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import StoreContext from "@/store/StoreContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreContext>
        <ThemeProvider>
          <body className={`${cabinet.variable}`}>{children}</body>
        </ThemeProvider>
      </StoreContext>
    </html>
  );
}
