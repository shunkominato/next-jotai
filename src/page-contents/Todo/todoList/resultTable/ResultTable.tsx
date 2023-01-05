import { Table } from '@mantine/core';
import { FC, memo } from 'react';
import { useFetchTodos } from './useFetchTodos';

export const ResultTable: FC = memo(() => {
  const { todoList } = useFetchTodos();

  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>todo</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {todoList?.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.todo}</td>
            <td>{todo.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});
