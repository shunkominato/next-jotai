import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { errorHandler } from '@/util/errorHandler';
import { AxiosError } from 'axios';
import { AuthFormTypes } from '@/validations/schema/auth/validation';
import { userAtom } from '@/stores/user/userAtom';
import { useSetAtom } from 'jotai';
import { apiSignUp, ISignUpApi } from '../apiSignup';

export const useSignUpWithTwitter = () => {
  const router = useRouter();
  const setUser = useSetAtom(userAtom);

  const onSuccessSignUp = async (data: ISignUpApi) => {
    setUser(data.data);

    await router.push('/todo');
  };

  const { mutate, isLoading, isError } = useMutation(apiSignUp, {
    onSuccess: onSuccessSignUp,
    onError: (err: AxiosError) => {
      errorHandler({ err });
    },
  });

  const handleSignUpWithTwitter = useCallback(
    (signUpFormValue: AuthFormTypes, ss: boolean, aa: string) => {
      mutate({
        email: signUpFormValue.email,
        password: signUpFormValue.password,
      });
    },
    []
  );

  return { handleSignUpWithTwitter, isLoading, isError };
};
