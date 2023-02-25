import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { AxiosError } from 'axios';
import { userAtom } from '@/stores/user/userAtom';
import { useSetAtom } from 'jotai';
import { AuthFormTypes } from '@/validations/schema/auth/validation';
import { apiLogin, ILoginApi } from './apiLogin';

export const useLogin = () => {
  const router = useRouter();
  const [isErrorEmailOrPassword, setIsErrorEmailOrPassword] = useState(false);
  const setUser = useSetAtom(userAtom);

  const onSuccess = async (data: ILoginApi) => {
    console.log(data);
    setUser(data.data);

    await router.push('/todo');
  };

  const { mutate, isLoading, isError } = useMutation(apiLogin, {
    onSuccess,
    onError: (err: AxiosError) => {
      if (err.response?.status === 401) {
        setIsErrorEmailOrPassword(true);
      }
    },
  });

  const handleLogin = useCallback(
    (loginFormValue: AuthFormTypes) => {
      setIsErrorEmailOrPassword(false);
      mutate({
        email: loginFormValue.email,
        password: loginFormValue.password,
      });
    },
    [mutate]
  );

  return { handleLogin, isLoading, isError, isErrorEmailOrPassword };
};
