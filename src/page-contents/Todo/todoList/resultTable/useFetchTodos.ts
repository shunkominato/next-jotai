import { errorHandler } from '@/util/errorHandler';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { todoListApi } from './todoListApi';

export const useFetchTodos = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todoList'],
    queryFn: todoListApi,
    onError: (err: AxiosError) => {
      errorHandler({ err, alertMessage: '失敗しました' });
    },
  });

  return {
    todoList: data?.todoList,
    isLoading,
    isError,
  };
};
