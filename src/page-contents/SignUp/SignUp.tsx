import { FC } from 'react';
import { Container, Paper } from '@mantine/core';
import { FormTitle } from '@/components/ui/elements/form/form-title/FormTitle';
import { SignUpForm } from './signUpForm';

export const SignUp: FC = () => {
  return (
    <Container size={500} px="xs" my="xl">
      <Paper shadow="sm" withBorder>
        <div className="px-20 py-9">
          <FormTitle label="新規ユーザー登録" />
          <SignUpForm />
        </div>
      </Paper>
    </Container>
  );
};
