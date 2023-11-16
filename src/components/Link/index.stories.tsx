import type { Meta, StoryObj } from "@storybook/react";
import Link from "./";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const AllLinks: Story = {
  render: () => {
    return (
      <div className="grid gap-2">
        <Link>This a STANDARD link</Link>
        <Link type="action">This an ACTION link</Link>
      </div>
    );
  },
};
