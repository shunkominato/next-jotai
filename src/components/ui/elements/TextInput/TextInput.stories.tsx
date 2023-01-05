import { TextInput } from './TextInput';

export default {
  title: 'Components/Button',
  component: TextInput,
};

export const basicButton = () => (
  <TextInput
    mt="xs"
    id="email"
    label="メールアドレス"
    placeholder="gmail"
    form={{}}
  />
);
// export const primaryButton = () => (
//   <Button label="yellow" color="yellow" onClick={() => {}} />
// );
