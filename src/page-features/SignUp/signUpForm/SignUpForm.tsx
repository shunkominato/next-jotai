import { FC } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { Divider, PasswordInput, Text } from '@mantine/core';
import { Button } from '@/components/ui/elements/button/Button';
import { TextInput } from '@/components/ui/elements/TextInput/TextInput';
import {
  AuthFormTypes,
  authValidationSchema,
} from '@/validations/schema/auth/validation';
import { useSignUp } from './useSignUp';
import { TwitterButton } from './twitterButton/TwitterButton';

export const SignUpForm: FC = () => {
  const form = useForm<AuthFormTypes>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(authValidationSchema),
    validateInputOnChange: true,
  });

  const { handleSignUp, isLoading, isError } = useSignUp();

  return (
    <form className="mt-6" onSubmit={form.onSubmit(handleSignUp)}>
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
      <Text fz="xs">小文字・大文字・数値を含む半角英数字8文字以上</Text>
      <Text fz="xs" c="gray.6" mt="md">
        新規登録することで、利用規約 /
        プライバシーポリシーに同意したとみなします
      </Text>
      <div className="mt-4">
        <Button
          type="submit"
          label="登録"
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
