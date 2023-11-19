import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./index";
import AppLayout from "../AppLayout";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
Default.decorators = [
  (Story) => {
    return (
      <AppLayout>
        <></>
      </AppLayout>
    );
  },
];
