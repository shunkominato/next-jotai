import { Button } from '@/components/ui/elements/button/Button';
import { TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { FC } from 'react';
import { Header } from './Header';
import { inputStyles } from './style';
import { useAddTodos } from './useAddTodo';
import { TodoFormTypes, validationSchema } from './validation';

export const TodoForm: FC = () => {
  const form = useForm<TodoFormTypes>({
    initialValues: {
      todo: '',
    },
    validate: zodResolver(validationSchema),
    validateInputOnChange: true,
  });
  const { handleSubmit, isLoading, isError } = useAddTodos();

  return (
    <>
      <Header title="=Todo追加" />
      <form className="mt-6" onSubmit={form.onSubmit(handleSubmit)}>
        <div>
          <TextInput
            mt="md"
            id="todo"
            label="todo *"
            radius="xs"
            styles={inputStyles}
            {...form.getInputProps('todo')}
          />
        </div>
        <Button
          type="submit"
          label="追加"
          // styles={buttonStyles}
          // disabled={!!form.errors.todo || !form.values.todo}
          loading={isLoading}
        />
      </form>
    </>
  );
};
