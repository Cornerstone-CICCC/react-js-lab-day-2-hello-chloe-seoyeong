import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Todo } from "./Todos";
import { v4 as uuidv4 } from "uuid";

type Props = {
  onAdd: (todo: Todo) => void;
};

const TodoForm = ({ onAdd }: Props) => {
  const [todo, setTodo] = useState<Todo>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!todo) {
      return null;
    }
    onAdd(todo);
    setTodo({
      id: "",
      task: "",
      completed: false,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      id: uuidv4(),
      task: e.target.value,
      completed: false,
    });
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit} className="flex justify-between gap-3">
        <Input
          className="flex-1"
          value={todo?.task ?? ""}
          onChange={handleChange}
        />
        <Button className="cursor-pointer">Add Task</Button>
      </form>
    </div>
  );
};

export default TodoForm;
