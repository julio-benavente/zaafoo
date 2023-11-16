import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./index";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => {
    return (
      <div className="grid gap-y-2">
        <Typography variant="h1">This is a H1 </Typography>
        <Typography variant="h2">This is a H2</Typography>
        <Typography variant="h3">This is a H3</Typography>
        <Typography variant="h4">This is a H4</Typography>
        <Typography variant="body1">This is a body1</Typography>
        <Typography variant="body2">This is a body2</Typography>
        <Typography variant="subtitle1">This is a subtitle one</Typography>
        <Typography variant="subtitle2">This is a subtitle two</Typography>
        <Typography variant="caption">This is a caption</Typography>
      </div>
    );
  },
};
