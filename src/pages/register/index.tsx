import Title from "@/components/layout/title";
import { AuthPage } from "@refinedev/antd";

export const Register = () => {
  return <AuthPage title={<Title type="large"/>} type="register" />;
};
