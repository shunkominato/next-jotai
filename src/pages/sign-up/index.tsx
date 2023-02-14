import { NextPage } from 'next';
import { Layout } from 'src/layout/Layout';
import { SignUp } from '../../page-contents/SignUp';

const SignUpPage: NextPage = () => {
  return (
    <Layout title="sign-up">
      <SignUp />
    </Layout>
  );
};

export default SignUpPage;
