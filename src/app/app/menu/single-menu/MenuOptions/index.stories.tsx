import type { Meta, StoryObj } from "@storybook/react";
import MenuOptions from "./index";
import MenuOptionsProvider from "./context";

const meta: Meta<typeof MenuOptions> = {
  title: "Pages/Single Menu Page/Menu Options",
  component: MenuOptions,
  parameters: {
    // layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MenuOptionsProvider>
        <Story />
      </MenuOptionsProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MenuOptions>;

export const Default: Story = {};
