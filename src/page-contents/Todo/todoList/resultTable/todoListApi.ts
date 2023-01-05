import apiClient from '@/lib/apiClient';

type Todo = {
  id: number;
  todo: string;
  status: number;
};

export type ITodoApi = {
  todoList: Todo[];
};

export const todoListApi = async () => {
  const { data } = await apiClient.get<ITodoApi>({
    uri: `/api/v1/todos`,
  });
  return data;
};
