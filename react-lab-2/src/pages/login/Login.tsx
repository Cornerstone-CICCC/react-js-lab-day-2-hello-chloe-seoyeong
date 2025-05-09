import { CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <CardHeader>
        <CardTitle>Hi, What's your name?</CardTitle>
      </CardHeader>
      <LoginForm />
    </>
  );
};

export default Login;
