import { Button } from "@/components";
import { Decorator } from "@storybook/react";
import { useState } from "react";

export const Toggle: Decorator = (StoryComponent) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Button color="secondary" size="large" onClick={() => setOpen(true)}>
        {open ? "Off" : "On"}
      </Button>
      <StoryComponent open={open} setOpen={setOpen} />
    </div>
  );
};
