import { AiplButton } from "./AiplButton";
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import type { AiplComponentContextConfig } from "./AiplComponentContextState";
import { AiplComponentProvider } from "../provider/AiplComponentProvider";
import { mockConfig } from "./mockConfig";

type StoryProps = ComponentProps<typeof AiplButton> & {
  papId: string;
  aiplHomeUrl: string;
};

const meta: Meta<StoryProps> = {
  component: AiplButton,
  tags: ["autodocs"],
  argTypes: {
    papId: { control: { type: "text" } },
    aiplHomeUrl: { control: { type: "text" } },
  },
};

export default meta;

export const Example: StoryObj<StoryProps> = {
  render: ({ papId, aiplHomeUrl, ...args }) => (
    <AiplComponentProvider
      config={{ ...mockConfig, papId, homeUrl: aiplHomeUrl }}
    >
      <AiplButton {...args} />
    </AiplComponentProvider>
  ),
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "exampleButton",
    children: "click me",
  },
};

export const Play: StoryObj<StoryProps> = {
  render: ({ papId, aiplHomeUrl, ...args }) => (
    <AiplComponentProvider
      config={{ ...mockConfig, papId, homeUrl: aiplHomeUrl }}
    >
      <AiplButton
        onAction={(context) => {
          console.log("context", context);
        }}
        {...args}
      />
    </AiplComponentProvider>
  ),
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "exampleButton",
    children: "play",
  },
};
