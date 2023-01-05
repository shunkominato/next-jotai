import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { errorHandler } from '@/util/errorHandler';
import { todoStatusApi } from './todoApi';

export const useFetchTodoStatus = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todoStatus'],
    queryFn: todoStatusApi,
    onError: (err: AxiosError) => {
      errorHandler({ err, alertMessage: '失敗しました' });
    },
  });

  return {
    todoStatus: data?.todoStatus,
    isLoading,
    isError,
  };
};
