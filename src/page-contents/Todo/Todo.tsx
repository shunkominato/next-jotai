import { userAtom } from '@/stores/user/userAtom';
import { useAtomValue } from 'jotai';
import { FC } from 'react';
import { TodoForm } from './todoForm';
import { TodoList } from './todoList';

export const Todo: FC = () => {
  const user = useAtomValue(userAtom);
  console.log(user);
  return (
    <>
      {user.name}
      <TodoList />
      <TodoForm />
    </>
  );
};
