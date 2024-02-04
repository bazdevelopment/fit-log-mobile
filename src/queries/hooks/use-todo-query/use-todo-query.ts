import { useQuery } from "@tanstack/react-query";
import { fetchTodoData } from "api/todo/todo-api";
import { TODO_KEY } from "queries/query-keys/todo-key";

export function useTodoQuery() {
  return useQuery({ queryKey: TODO_KEY, queryFn: fetchTodoData });
}
