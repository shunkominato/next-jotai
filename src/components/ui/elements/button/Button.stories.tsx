import { Button } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const BasicButton = Template.bind({});
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  color: 'primary',
  label: 'Button',
};
