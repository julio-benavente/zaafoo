import type { Meta, StoryObj } from "@storybook/react";
import MenuPage from "./page";
import AppLayout from "../layout";

const meta: Meta<typeof MenuPage> = {
  title: "Pages/Menu Page",
  component: MenuPage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return (
        <AppLayout>
          <Story />
        </AppLayout>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof MenuPage>;

export const Default: Story = {};
