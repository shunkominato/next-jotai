import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { SignUpFormTypes } from './validation';
import { signUpApi, SignUpApiType, ISignUpApi } from './signupApi';
import { errorHandler } from '@/util/errorHandler';
import { AxiosError } from 'axios';
import { userAtom } from '@/stores/user/userAtom';
import { useSetAtom } from 'jotai';

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const setUser = useSetAtom(userAtom);
  const onSuccessLogin = async (
    data: ISignUpApi | void,
    variables: SignUpApiType,
    context: []
  ) => {
    console.log({ data });
    console.log({ variables });
    console.log({ context });
    queryClient.setQueriesData(['user'], data);

    await router.push('/todo');
  };

  const { mutate, isLoading, isError } = useMutation(signUpApi, {
    onSuccess: async (data) => {
      console.log('data');
      console.log(data.data);
      console.log('data');
      // queryClient.setQueriesData(['user'], data.data);
      setUser(data.data);

      await router.push('/todo');
    },
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
