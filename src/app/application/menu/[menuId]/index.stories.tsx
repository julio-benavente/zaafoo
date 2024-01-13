import type { Meta, StoryObj } from "@storybook/react";
import SingleMenuPage from "./page";
import AppLayout from "@/layout/AppLayout";

const meta: Meta<typeof SingleMenuPage> = {
  title: "Pages/Single Menu Page",
  component: SingleMenuPage,
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

type Story = StoryObj<typeof SingleMenuPage>;

export const Default: Story = {};
Default.parameters = {
  nextjs: {
    appDirectory: true,
    navigation: {
      segments: [["menuId", "66109a1d-9a33-47f7-b5ae-4de3j44523ea"]],
    },
  },
};
