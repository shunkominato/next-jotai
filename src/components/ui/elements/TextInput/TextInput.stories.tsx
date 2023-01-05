import { TextInput } from './TextInput';

export default {
  title: 'Components/Button',
  component: TextInput,
};

const form = {} as any;

export const basicButton = () => (
  <TextInput
    mt="xs"
    id="email"
    label="メールアドレス"
    placeholder="gmail"
    form={form}
  />
);
// export const primaryButton = () => (
//   <Button label="yellow" color="yellow" onClick={() => {}} />
// );
