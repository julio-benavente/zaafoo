import type { Meta, StoryObj } from "@storybook/react";
import { FormControlLabelProps } from "@mui/material";
import Switch from "./index";
import { useController, useForm } from "react-hook-form";
import FormControlLabelSwitch from "@/components/FormControlLabelSwitch";

const meta: Meta<typeof Switch | typeof FormControlLabelSwitch> = {
  title: "Components/Switch",
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof FormControlLabelSwitch | typeof Switch>;

const DefaultWithHooks = () => {
  const { control } = useForm();
  const { field: settingOne } = useController({
    name: "setting-one",
    control,
  });

  return (
    <FormControlLabelSwitch
      label="This a label for a swtich component"
      control={<Switch {...settingOne} />}
    />
  );
};

export const Default: Story = {
  render: (args: any) => <DefaultWithHooks />,
};

const WithControlsWithHooks = (args: any) => {
  const { control } = useForm();
  const { field: settingOne } = useController({
    name: "setting-one",
    control,
  });

  return (
    <FormControlLabelSwitch
      label={args?.label}
      control={<Switch {...settingOne} {...args} />}
    />
  );
};

export const WithControls: Story = {
  render: (args: any) => {
    return <WithControlsWithHooks {...args} />;
  },
};
WithControls.args = {
  label: "This a label for a swtich component",
  disabled: false,
  checked: true,
};
WithControls.argTypes = {
  disabled: {
    type: "boolean",
    control: "boolean",
    label: "string",
  },
  value: {
    control: "boolean",
    type: "boolean",
  },
};
