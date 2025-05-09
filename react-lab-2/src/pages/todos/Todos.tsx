import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLogin } from "@/contexts/login/useLogin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodosItem from "./TodoItem";
import { Button } from "@/components/ui/button";

export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

const Todos = () => {
  const { user, isLogin, setIsLogin } = useLogin();
  const [todos, setTodos] = useState<Todo[]>([]);
  const navigate = useNavigate();

  const handleAddTask = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleDeleteTask = (id: string) => {
    setTodos((prev) => prev.filter((prev) => prev.id !== id));
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>Hello, {user}</span>
          <Button onClick={handleLogout}>Log Out</Button>
        </CardTitle>
        <CardDescription>Have a great and productive day! 😀</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-auto overflow-y-scroll max-h-96">
          {todos.map((todo, index) => (
            <TodosItem key={index} todo={todo} onDelete={handleDeleteTask} />
          ))}
        </div>
        <TodoForm onAdd={handleAddTask} />
      </CardContent>
    </>
  );
};

export default Todos;
