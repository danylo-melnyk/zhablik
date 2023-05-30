import Page from '@/components/common/layout/page';
import RegisterPage from '@/components/pages/register-page';

const Register = () => {
  return (
    <Page hasHeader={false}>
      <RegisterPage />
    </Page>
  );
};

export default Register;
