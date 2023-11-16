import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";
import Button from "../Button";
// import { FormProviderDecorator } from "@/helpers/decorators";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      // <FormProviderDecorator>
      <Story />
      // </FormProviderDecorator>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
Default.args = {
  labelProps: { label: "I have read and agree to this disclosure" },
};

export const LongLabel: Story = {};
LongLabel.decorators = [
  (Story) => (
    <div className="max-w-xs">
      <Story />
    </div>
  ),
];
LongLabel.args = {
  labelProps: {
    label:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aliquam, impedit quasi nihil autem quisquam praesentium tempore ratione? Suscipit minus ex dolorum voluptas eius excepturi labore modi, repellat voluptatibus dolorem eveniet, itaque vitae, saepe commodi? Accusamus impedit ab delectus asperiores.",
  },
};

export const InAForm: Story = {
  render: () => {
    return (
      <div className="grid gap-8 justify-items-start max-w-xs relative">
        <Button>Prueba</Button>
        <Checkbox
          name="agreement"
          labelProps={{
            label: "I have read and agree to this disclosure",
          }}
        />
      </div>
    );
  },
};
