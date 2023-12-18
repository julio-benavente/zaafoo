import type { Meta, StoryObj } from "@storybook/react";
import OptionsButton from "./index";
import DeleteIcon from "@mui/icons-material/Delete";
import AbcRounded from "@mui/icons-material/AbcRounded";
const meta: Meta<typeof OptionsButton> = {
  title: "Components/Options Button",
  component: OptionsButton,
  //   parameters: {
  // layout: "fullscreen",
  //   },
};

export default meta;

type Story = StoryObj<typeof OptionsButton>;

export const Default: Story = {
  render: () => {
    return <OptionsButton>{/* <AbcRounded /> */}</OptionsButton>;
  },
};
