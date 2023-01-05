import { FC, useCallback } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { Container, PasswordInput } from '@mantine/core';
import { Button } from '@/components/ui/elements/button/Button';
import { SignUpFormTypes, validationSchema } from './validation';
import { useSignUp } from './useSignUp';
import { TextInput } from '@/components/ui/elements/TextInput/TextInput';

const buttonStyles = {
  root: {
    marginTop: 48,
    height: 72,
  },
};

const inputStyles = {
  input: {
    height: 56,
  },
  innerInput: {
    height: 56,
  },
};

export const SignUpForm: FC = () => {
  const form = useForm<SignUpFormTypes>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(validationSchema),
    validateInputOnChange: true,
  });

  const { handleSignUp, isLoading, isError } = useSignUp();

  return (
    <form className="mt-6" onSubmit={form.onSubmit(handleSignUp)}>
      {/* <TextInput
          mt="md"
          id="email"
          label="メールアドレスを入力してください（半角）*"
          placeholder="example@gmail.com"
          radius="xs"
          styles={inputStyles}
          {...form.getInputProps('email')}
          // form={form}
        /> */}
      <TextInput
        id="email"
        label="メールアドレスを入力してください（半角）*"
        placeholder="example@gmail.com"
        styles={inputStyles}
        form={form}
      />
      <PasswordInput
        mt="md"
        id="password"
        placeholder="password"
        label="Password*"
        radius="xs"
        styles={inputStyles}
        {...form.getInputProps('password')}
      />
      <Button
        type="submit"
        label="登録"
        size="xl"
        fullWidth
        styles={buttonStyles}
        disabled={!!form.errors.email || !form.values.email}
        loading={isLoading}
      />
    </form>
  );
};
