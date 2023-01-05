import { FC } from 'react';
import { Container } from '@mantine/core';
import { FormTitle } from '@/components/ui/elements/form/form-title/FormTitle';
import { SignUpForm } from './signUpForm/SignUpForm';

export const SignUp: FC = () => {
  return (
    <Container>
      <div className="text-center">
        <FormTitle label="新規ユーザー登録" />
      </div>
      <SignUpForm />
    </Container>
  );
};
