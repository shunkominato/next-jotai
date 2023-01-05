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

export type TodoStatus = {
  id: number;
  status: string;
};

export type ITodoStatuses = {
  todoStatus: TodoStatus[];
};

export const todoStatusApi = async () => {
  const { data } = await apiClient.get<ITodoStatuses>({
    uri: `/api/v1/todo_statuses`,
  });
  return data;
};
