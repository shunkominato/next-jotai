import { useQuery } from '@tanstack/react-query';
import router from 'next/router';
import { AxiosError } from 'axios';
import { todoStatusApi } from './todoApi';
import { errorHandler } from '@/util/errorHandler';

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
