import { Todo } from '@/page-features/Todo';
import { NextPage } from 'next';
import { Layout } from '@/layouts/Layout';

const TodoPage: NextPage = () => {
  return (
    <Layout title="todo">
      <Todo />
    </Layout>
  );
};

export default TodoPage;
