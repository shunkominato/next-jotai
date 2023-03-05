import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { errorHandler } from '@/util/errorHandler';
import { AxiosError } from 'axios';
import { AuthFormTypes } from '@/validations/schema/auth/validation';
import { userAtom } from '@/stores/user/userAtom';
import { useSetAtom } from 'jotai';
import { apiLogin, ILoginApi } from '../apiLogin';

export const useSignUpWithTwitter = () => {
  const router = useRouter();
  const setUser = useSetAtom(userAtom);

  const onSuccessSignUp = async (data: ILoginApi) => {
    setUser(data.data);

    await router.push('/todo');
  };

  const { mutate, isLoading, isError } = useMutation(apiLogin, {
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
