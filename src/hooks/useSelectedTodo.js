import { useSelector } from "react-redux";

const useSelectedTodo = () => {
  const todoList = useSelector((state) => state.todoList?.todoList);
  const selectedTodoTitle = useSelector((state) => state.selected.todo.title);
  const selectedTodo = todoList.find(
    (todo) => todo.title === selectedTodoTitle
  );
  if (selectedTodo === undefined || selectedTodo === null)
    return { selectedTodo: {} };
  return { selectedTodo };
};

export default useSelectedTodo;
