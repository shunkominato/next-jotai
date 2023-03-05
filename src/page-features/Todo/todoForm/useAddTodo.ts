import { errorHandler } from '@/util/errorHandler';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { addTodoApi } from './addTodoApi';
import { ERROR_MESSAGES } from './constants';
import { TodoFormTypes } from './validation';

export const useAddTodos = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(addTodoApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todoList']);
    },
    onError: (err: AxiosError) => {
      errorHandler({ err, alertMessage: ERROR_MESSAGES.TODO_ADD });
    },
  });

  const handleSubmit = useCallback((formValue: TodoFormTypes) => {
    mutate({
      todo: {
        todo: formValue.todo,
        userId: 1,
      },
    });
  }, []);

  return {
    handleSubmit,
    isLoading,
    isError,
  };
};
