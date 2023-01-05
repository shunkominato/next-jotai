import { NextPage } from 'next';
import { Layout } from 'src/layout/Layout';
import { Login } from '../../page-contents/components/Login';

const LoginPage: NextPage = () => {
  return (
    <Layout title="ddd">
      <Login />
    </Layout>
  );
};

export default LoginPage;
