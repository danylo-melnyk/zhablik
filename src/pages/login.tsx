import Page from '@/components/common/layout/page';
import LoginPage from '@/components/pages/login-page';

const Login = () => {
  return (
    <Page hasHeader={false}>
      <LoginPage />
    </Page>
  );
};

export default Login;
