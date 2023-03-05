import { NextPage } from 'next';
import { Layout } from 'src/layout/Layout';
import { Login } from '../../page-features/Login';

const LogiPage: NextPage = () => {
  return (
    <Layout title="login">
      <Login />
    </Layout>
  );
};

export default LogiPage;
