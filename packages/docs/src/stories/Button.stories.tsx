import { StoryObj, Meta } from '@storybook/react';

import { Button } from '@ignite-ui/react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta;

export const Primary: StoryObj = {};

export const Disabled: StoryObj = {
  args: {
    disabled: true,
  },
};
