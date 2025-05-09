import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/contexts/login/useLogin";
import { type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { user, setUser, setIsLogin } = useLogin();
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLogin(true);
    navigate("/todos");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-between gap-3">
        <Input className="flex-1" value={user} onChange={handleChange} />
        <Button className="cursor-pointer">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
