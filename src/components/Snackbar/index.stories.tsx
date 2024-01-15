import type { Meta, StoryObj } from "@storybook/react";
import Snackbar from "./index";
import SnackProvider from "./SnackbarProvider";
import { VariantType, useSnackbar } from "notistack";
import { useEffect } from "react";
import { Button } from "..";
import ThemeProvider from "@/helpers/ThemeProvider";

const meta: Meta<typeof Snackbar> = {
  title: "Components/Snackbar",
  component: Snackbar,
  parameters: {
    // layout: "fullscreen",
  },
  argTypes: {
    color: {
      name: "alertProps.color",
      description: "Variant of the snackbar",
      options: ["default", "info", "warning", "success", "error"],
      control: { type: "select" },
      // type: "string",
    },
  },
  args: {
    color: "default",
    onClose: undefined,
    children: (
      <p>
        This a <b>Default Alert</b>
      </p>
    ),
  },
  decorators: [
    (Story, args) => {
      return (
        <ThemeProvider>
          <SnackProvider>
            <Story {...args} />
          </SnackProvider>
        </ThemeProvider>
      );
    },
    (Story, { args }) => {
      // color = (args.color || "info") as any;
      return <Story {...args} />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {};
Default.args = {
  onClose: (e) => {
    console.log(e);
  },
};

export const LongMessage: Story = {};
LongMessage.args = {
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, hic! Blanditiis temporibus eaque iste rem vel, aperiam itaque minima id nulla dolore sequi quia necessitatibus!",
};

export const WithActionButton: Story = {};
WithActionButton.args = {
  action: <Button size="small">Action</Button>,
};

const WithStacksWithHooks = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action = (snackbarId) => (
    <Button
      size="small"
      onClick={() => {
        closeSnackbar(snackbarId);
      }}
    >
      Dismiss
    </Button>
  );

  return (
    <div className="grid gap-2 auto-cols-auto grid-flow-col">
      <Button
        onClick={() => {
          closeSnackbar();
        }}
      >
        Close
      </Button>
      <Button
        onClick={() => {
          const id = Math.random();
          enqueueSnackbar({
            color: "default",
            children: "This is an Default alert",
            id: id,
            action: (
              <Button
                size="small"
                onClick={() => {
                  closeSnackbar(id);
                }}
              >
                Dismiss
              </Button>
            ),
          });
        }}
      >
        Default
      </Button>
      <Button
        onClick={() => {
          enqueueSnackbar({
            color: "info",
            severity: "info",
            children: "This is an Info alert",
          });
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          enqueueSnackbar({
            color: "warning",
            children: (
              <p>
                This is an <b> Warning </b> alert
              </p>
            ),
          });
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          enqueueSnackbar({
            color: "success",
            children: "This is an Success alert",
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          enqueueSnackbar({
            color: "error",
            children: "This is an Error alert",
          });
        }}
      >
        Error
      </Button>
    </div>
  );
};

export const WithStacks: Story = {
  render: () => {
    return <WithStacksWithHooks />;
  },
};
