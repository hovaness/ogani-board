import { AuthPage } from "@refinedev/antd";
import { authCredentials } from "../../providers";
import Title from "@/components/layout/title";


export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={<Title type="large"/>}
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
