import type { Meta, StoryObj } from "@storybook/react";
import AppPage from "./page";

const meta: Meta<typeof AppPage> = {
  title: "Pages/App page",
  component: AppPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof AppPage>;

export const Default: Story = {};
