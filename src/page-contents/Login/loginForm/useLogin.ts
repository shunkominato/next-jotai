import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { errorHandler } from '@/util/errorHandler';
import { AxiosError } from 'axios';
import { userAtom } from '@/stores/user/userAtom';
import { useSetAtom } from 'jotai';
import { AuthFormTypes } from '@/validations/schema/auth/validation';
import { apiLogin, ILoginApi } from './apiLogin';

export const useLogin = () => {
  const router = useRouter();
  const setUser = useSetAtom(userAtom);

  const onSuccess = async (data: ILoginApi) => {
    setUser(data.data);

    await router.push('/todo');
  };

  const { mutate, isLoading, isError } = useMutation(apiLogin, {
    onSuccess,
    onError: (err: AxiosError) => {
      errorHandler({ err });
    },
  });

  const handleLogin = useCallback(
    (loginFormValue: AuthFormTypes) => {
      console.log(loginFormValue);
      // mutate({
      //   email: loginFormValue.email,
      //   password: loginFormValue.password,
      // });
    },
    [mutate]
  );

  return { handleLogin, isLoading, isError };
};
