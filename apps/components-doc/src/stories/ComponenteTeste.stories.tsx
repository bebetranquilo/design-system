import { Meta, StoryObj } from "@storybook/react";
import {
  ComponenteTeste,
  ComponenteTesteProps,
} from "@bebetranquilo/react-components";

export default {
  title: "Data display/Avatar",
  component: ComponenteTeste,
  args: {
    page: "lala",
    children: "lala",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<ComponenteTesteProps>;

export const Primary: StoryObj<ComponenteTesteProps> = {};
