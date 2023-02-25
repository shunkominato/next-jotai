import apiClient from '@/lib/apiClient';
import { AuthFormTypes } from '@/validations/schema/auth/validation';

export interface ILoginApi {
  data: {
    userId: number;
    name: string;
  };
  status: string;
}

export const apiLogin = async ({ email, password }: AuthFormTypes) => {
  const { data } = await apiClient.post<ILoginApi>({
    uri: `/api/v1/auth`,
    body: { email, password },
  });
  return data;
};
