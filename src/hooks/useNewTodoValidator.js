import { useSelector, useDispatch } from "react-redux";
import { focusInputTitle } from "../actions";

// const useNewTodoValidator = (inputTitleRef) => {
const useNewTodoValidator = () => {
  const dispatch = useDispatch();
  const newTodoTitle = useSelector((state) => state.todoList.newTodo.title);
  const todoList = useSelector((state) => state.todoList.todoList);

  const newTodoValidator = () => {
    let errors = [];

    if (newTodoTitle.length === 0) {
      errors.push("Title is empty! Please enter a new title.");
      dispatch(focusInputTitle());
    }

    const hasDuplicatedTitle = todoList.some(
      (todo) => todo.title === newTodoTitle
    );
    if (hasDuplicatedTitle) {
      errors.push("Title already exits! Please enter a new title.");
      dispatch(focusInputTitle());
    }

    return { valid: errors.length === 0, errors: errors };
  };

  return newTodoValidator;
};

export default useNewTodoValidator;
