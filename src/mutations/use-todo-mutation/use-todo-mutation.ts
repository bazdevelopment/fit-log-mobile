import { useMutation } from "@tanstack/react-query";
import { updateTodo } from "api/todo/todo-api";
import { ITodo } from "api/todo/todo-api.interface";

export function useTodoMutation(id: number, updates: Partial<ITodo>) {
  return useMutation({
    mutationFn: () => updateTodo(id, updates),
  });
}
