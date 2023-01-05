import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import apiClient from '@/lib/apiClient';
import { userState } from '@/stores/user/userAtom';
import { useCallback } from 'react';
import { useSetAtom } from 'jotai';
// import { LoginFormTypes } from './SignUp';

type UserType = {
  userId: number;
  name: string;
};

const loginApi = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await apiClient.post<UserType>({
    uri: `/auth/login`,
    body: { email, password },
  });
  return data;
};

export const useLogin = (): {
  isLoading: boolean;
} => {
  const AA = useSetAtom(userState);
  const router = useRouter();
  const onSuccessLogin = async (data: UserType) => {
    console.log({ data });
    await router.push('/todo');
  };

  const { mutate, isLoading } = useMutation(loginApi, {
    onSuccess: onSuccessLogin,
    onError: async (err: AxiosError) => {
      console.log(err);
      if (err.response?.status === 401 || err.response?.status === 403)
        await router.push('/');
    },
  });

  const login = ({ email, password }: { email: string; password: string }) => {
    mutate({
      email,
      password,
    });
  };

  // const handleLogin = useCallback((params: LoginFormTypes) => {
  //   login({ email: params.email, password: 'ss' });
  // }, []);

  return { isLoading };
};
