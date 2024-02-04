import { ITodo } from "./todo-api.interface";

export const fetchTodoData = async (): Promise<ITodo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: ITodo[] = await response.json();
  return data;
};

export const updateTodo = async (id: number, updates: Partial<ITodo>): Promise<ITodo> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  const updatedTodo = await response.json();
  return updatedTodo as ITodo;
};
