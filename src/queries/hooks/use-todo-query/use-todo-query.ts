import { useQuery } from "@tanstack/react-query";
import { fetchTodoData } from "api/todo/todo-api";
import { TODO_KEY } from "queries/query-keys/todo-key";

/**
 * The `useTodoQuery` function is a custom React hook used for querying todo data in a React application.
 * It encapsulates the logic for fetching todo data and managing the query state using the React Query library.
 */
export function useTodoQuery() {
  return useQuery({ queryKey: TODO_KEY, queryFn: fetchTodoData });
}
