import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { cabinet } from "../src/helpers/fonts";
import ThemeProvider from "../src/helpers/ThemeProvider";
import SnackbarProvider from "../src/components/Snackbar/SnackbarProvider";
import { Provider } from "react-redux";
import { store } from "../src/store";

const customViewports = {
  extraSmall: {
    name: "Extra small",
    styles: {
      width: "320px",
      height: "720px",
    },
  },
  small: {
    name: "Small",
    styles: {
      width: "640px",
      height: "720px",
    },
  },
  medium: {
    name: "Medium",
    styles: {
      width: "768px",
      height: "900px",
    },
  },
  large: {
    name: "Large",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
  extraLarge: {
    name: "Extra Large",
    styles: {
      width: "1280px",
      height: "768px",
    },
  },
  extraExtraLarge: {
    name: "Extra Extra Large",
    styles: {
      width: "1536px",
      height: "768px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      viewports: {
        // ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
  decorators: [
    (Story) => {
      document.body.classList.add(cabinet.variable);
      return <div className={`${cabinet.variable}`}>{<Story />}</div>;
    },
    (Story, args) => {
      return (
        <Provider store={store}>
          <ThemeProvider>
            <SnackbarProvider>
              <Story {...args} />
            </SnackbarProvider>
          </ThemeProvider>
        </Provider>
      );
    },
  ],
};

export default preview;
