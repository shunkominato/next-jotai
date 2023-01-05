import apiClient from '@/lib/apiClient';

export type SignUpApiType = {
  email: string;
  password: string;
};

export type ISignUpApi = {
  data: {
    userId: number;
    name: string;
  };
  status: string;
};

export const signUpApi = async ({ email, password }: SignUpApiType) => {
  const { data } = await apiClient.post<ISignUpApi>({
    uri: `/api/v1/auth`,
    body: { email, password },
  });
  return data;
};
