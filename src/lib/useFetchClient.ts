/* eslint-disable */
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

const onDefaultError = (err: AxiosError) => {
  if (err.response?.status === 401 || err.response?.status === 403) {
    const router = useRouter();
    router.push('/');
  }
};

// export const useMutationClient = <T>(
//   api: (any: T) => Promise<any>,
//   onSuccess: (any: any) => any,
//   onError?: any
// ) => {
//   const { mutate, isLoading, isError } = useMutation(api, {
//     onSuccess,
//     onError: onError || onDefaultError,
//   });
//   return {
//     mutate,
//     isLoading,
//     isError,
//   };
// };

export const useQueryClient = <
  TQueryKey extends [string, (Record<string, unknown> | string)?],
  TQueryFnData,
  TError,
  TData = TQueryFnData
>(
  queryKey: TQueryKey,
  fetcher: (params: TQueryKey[1]) => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<unknown, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery({
    queryKey,
    queryFn: async () => fetcher(queryKey[1]),
    ...options,
  });
};

export const useMutationClient = <TVariables, TData, TContext>(
  fetcher: (params: TVariables) => Promise<TData | void>,
  options?: UseMutationOptions<TData | void, unknown, TVariables, TContext>
) => {
  return useMutation(
    async (params: TVariables) => {
      return await fetcher(params);
    },
    { ...options }
  );
};
