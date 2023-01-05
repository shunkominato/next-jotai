import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { addTodoApi } from './addTodoApi';
import { TodoFormTypes } from './validation';

const onErrorAddTodo = (err: AxiosError) => {
  console.log(err);
  window.alert('add Error');
};

export const useAddTodos = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(addTodoApi, {
    onError: onErrorAddTodo,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(['todoList']);
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
