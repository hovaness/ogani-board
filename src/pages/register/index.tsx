import AuthTitle from "@/components/layout/auth-title";
import { AuthPage } from "@refinedev/antd";

export const Register = () => {
  return <AuthPage title={<AuthTitle/>} type="register" />;
};
