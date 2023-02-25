import apiClient from '@/lib/apiClient';
import { AuthFormTypes } from '@/validations/schema/auth/validation';

export type ISignUpApi = {
  data: {
    userId: number;
    name: string;
  };
  status: string;
};

export const apiSignUp = async ({ email, password }: AuthFormTypes) => {
  const { data } = await apiClient.post<ISignUpApi>({
    uri: `/api/v1/auth`,
    body: { email, password },
  });
  return data;
};
