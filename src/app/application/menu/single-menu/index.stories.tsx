import type { Meta, StoryObj } from "@storybook/react";
import SingleMenuPage from "./page";
import AppLayout from "./layout";

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
