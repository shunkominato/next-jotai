import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { errorHandler } from '@/util/errorHandler';
import { AxiosError } from 'axios';
import { userAtom } from '@/stores/user/userAtom';
import { useSetAtom } from 'jotai';
import { signUpApi, ISignUpApi } from './signupApi';
import { SignUpFormTypes } from './validation';

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

  const handleSignUp = useCallback((signUpFormValue: SignUpFormTypes) => {
    mutate({
      email: signUpFormValue.email,
      password: signUpFormValue.password,
    });
  }, []);

  return { handleSignUp, isLoading, isError };
};
