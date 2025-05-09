import { Button } from "@/components/ui/button";
import type { Todo } from "./Todos";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
};

const TodosItem = ({ onDelete, todo }: Props) => {
  return (
    <div className="flex justify-between items-center bg-gray-400/30 p-3 mb-2">
      <p>{todo.task}</p>
      <Button variant={"secondary"} onClick={() => onDelete(todo.id)}>
        Delete Task
      </Button>
    </div>
  );
};

export default TodosItem;
