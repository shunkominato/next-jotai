import { FC } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { Checkbox, Divider, PasswordInput, Text } from '@mantine/core';
import { Button } from '@/components/ui/elements/button/Button';
import { TextInput } from '@/components/ui/elements/TextInput/TextInput';
import {
  AuthFormTypes,
  authValidationSchema,
} from '@/validations/schema/auth/validation';
import { useLogin } from './useLogin';
import { TwitterButton } from './twitterButton/TwitterButton';

export const LoginForm: FC = () => {
  const form = useForm<AuthFormTypes>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(authValidationSchema),
    validateInputOnChange: true,
  });

  const { handleLogin, isLoading, isError } = useLogin();

  return (
    <form className="mt-6" onSubmit={form.onSubmit(handleLogin)}>
      <TextInput
        id="email"
        label="メールアドレス（半角英数字）"
        required
        placeholder="example@gmail.com"
        form={form}
      />
      <PasswordInput
        mt="md"
        id="password"
        label="パスワード"
        required
        radius="xs"
        {...form.getInputProps('password')}
      />
      <div className="mt-10">
        <Button
          type="submit"
          label="ログイン"
          size="md"
          fullWidth
          disabled={!!form.errors.email || !form.values.email}
          loading={isLoading}
        />
      </div>
      <div className="p-6">
        <Divider label="または" labelPosition="center" />
      </div>
      <TwitterButton />
    </form>
  );
};
