import { AuthPage } from "@refinedev/antd";
import Title from "@/components/layout/title";

export const ForgotPassword = () => {
  return <AuthPage title={<Title type='large'/>} type="forgotPassword" />;
};
