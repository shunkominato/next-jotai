import { FC } from 'react';
import Link from 'next/link';
import { Container, Paper } from '@mantine/core';
import { FormTitle } from '@/components/ui/elements/form/form-title/FormTitle';
import { LoginForm } from './loginForm';

export const Login: FC = () => {
  return (
    <Container size={500} px="xs" my="xl">
      <Paper shadow="sm" withBorder>
        <div className="px-20 py-9">
          <FormTitle label="ログイン" />
          <LoginForm />
          <div className="mt-6 text-center">
            <Link href="/" className="no-underline">
              新規登録はこちら
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link href="/" className="no-underline">
              パスワードをお忘れの方はこちら
            </Link>
          </div>
        </div>
      </Paper>
    </Container>
  );
};
