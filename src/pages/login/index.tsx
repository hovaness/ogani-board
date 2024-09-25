import { AuthPage } from "@refinedev/antd";
import { authCredentials } from "../../providers";
import AuthTitle from "@/components/layout/auth-title";


export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={<AuthTitle/>}
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
