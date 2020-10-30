import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveNewTodo, saveToLocalStorage } from "../actions";
// Hooks
import useNewTodoValidator from "./useNewTodoValidator";

// const useNewTodoSaver = (inputTitleRef) => {
const useNewTodoSaver = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.todoList);
  // const newTodoValidator = useNewTodoValidator(inputTitleRef);
  const newTodoValidator = useNewTodoValidator();

  useEffect(() => {
    dispatch(saveToLocalStorage(todoList));
  }, [todoList, dispatch]);

  const newTodoSaver = useCallback(() => {
    let saveSuccess = false;
    const { valid, errors } = newTodoValidator();
    if (!valid) {
      alert(errors[0]);
      saveSuccess = false;
    } else {
      dispatch(saveNewTodo());
      saveSuccess = true;
    }
    return saveSuccess;
  }, [dispatch, newTodoValidator]);

  return newTodoSaver;
};

export default useNewTodoSaver;
