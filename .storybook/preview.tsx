import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { cabinet } from "../src/helpers/fonts";

const customViewports = {
  extraSmall: {
    name: "Extra small",
    styles: {
      width: "360px",
      height: "720px",
    },
  },
  small: {
    name: "Small",
    styles: {
      width: "475px",
      height: "1024px",
    },
  },
  medium: {
    name: "Medium",
    styles: {
      width: "768px",
      height: "1024px",
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
      return <div className={`${cabinet.variable}`}>{<Story />}</div>;
    },
  ],
};

export default preview;
