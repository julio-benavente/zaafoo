import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./index";
import MoreVert from "@mui/icons-material/MoreVert";

const meta: Meta<typeof IconButton> = {
  title: "Components/Icon Button",
  component: IconButton,
  parameters: {
    // layout: "fullscreen",
  },

  args: {
    children: <MoreVert />,
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};
