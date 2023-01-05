import { Todo } from '@/page-contents/Todo';
import { NextPage } from 'next';
import { Layout } from 'src/layout/Layout';

const TodoPage: NextPage = () => {
  return (
    <Layout title="todo">
      <Todo />
    </Layout>
  );
};

export default TodoPage;
