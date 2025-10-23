import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialTodos: Todo[] = [
  { id: 1, text: "Review new product submissions", completed: false },
  { id: 2, text: "Update inventory counts", completed: true },
  { id: 3, text: "Respond to customer inquiries", completed: false },
  { id: 4, text: "Process pending orders", completed: false },
  { id: 5, text: "Generate monthly report", completed: true },
];

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Tasks</h1>
      <div className="flex flex-col gap-3">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-3">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
            />
            <span
              className={`text-sm ${
                todo.completed
                  ? "line-through text-muted-foreground"
                  : "text-foreground"
              }`}
            >
              {todo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
