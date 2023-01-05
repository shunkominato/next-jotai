import apiClient from '@/lib/apiClient';

type ITodo = {
  id: number;
  todo: string;
  status: number;
};

export type AddTodo = {
  todo: string;
  userId: number;
};

export const addTodoApi = async ({ todo }: { todo: AddTodo }) => {
  const { data } = await apiClient.post<ITodo>({
    uri: `/api/v1/todos`,
    body: {
      todo: todo.todo,
      userId: todo.userId,
      todoStatusesId: 1,
    },
  });
  return data;
};
