import type { Metadata } from "next";
import { cabinet } from "@/helpers/fonts";
import ThemeProvider from "@/helpers/ThemeProvider";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import StoreContext from "@/store/StoreContext";
import SnackProvider from "@/components/Snackbar/SnackbarProvider";

export const metadata: Metadata = {
  title: "Zaafoo",
  description: "Application to create online menus",
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
          <SnackProvider>
            <body className={`${cabinet.variable}`}>{children}</body>
          </SnackProvider>
        </ThemeProvider>
      </StoreContext>
    </html>
  );
}
