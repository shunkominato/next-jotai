import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { errorHandler } from '@/util/errorHandler';
import { AxiosError } from 'axios';
import { userAtom } from '@/stores/user/userAtom';
import { useSetAtom } from 'jotai';
import { AuthFormTypes } from '@/validations/schema/auth/validation';
import { signUpApi, ISignUpApi } from './signupApi';

export const useSignUp = () => {
  const router = useRouter();
  const setUser = useSetAtom(userAtom);

  const onSuccessSignUp = async (data: ISignUpApi) => {
    setUser(data.data);

    await router.push('/todo');
  };

  const { mutate, isLoading, isError } = useMutation(signUpApi, {
    onSuccess: onSuccessSignUp,
    onError: (err: AxiosError) => {
      errorHandler({ err });
    },
  });

  const handleSignUp = useCallback(
    (signUpFormValue: AuthFormTypes) => {
      mutate({
        email: signUpFormValue.email,
        password: signUpFormValue.password,
      });
    },
    [mutate]
  );

  return { handleSignUp, isLoading, isError };
};
