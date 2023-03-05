import { Radio } from '@mantine/core';
import { FC } from 'react';
import { ResultTable } from './resultTable';
import { useFetchTodoStatus } from './useFetchTodoStatus';

export const TodoList: FC = () => {
  const { todoStatus, isLoading } = useFetchTodoStatus();

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <>
      <h1>TodoList</h1>
      <Radio.Group name="status">
        {todoStatus?.map((status) => (
          <Radio key={status.id} value={status.id} label={status.status} />
        ))}
      </Radio.Group>
      <ResultTable />
    </>
  );
};
