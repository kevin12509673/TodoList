import { ACTION } from "./todoListActionType";

export const addNewTodo = () => {
  return {
    type: ACTION.ADD_NEW_TODO,
  };
};

export const saveNewTodo = () => {
  return {
    type: ACTION.SAVE_NEW_TODO,
  };
};

export const deleteTodo = (title) => {
  return {
    type: ACTION.DELETE_TODO,
    payload: title,
  };
};

export const editTodo = (title) => {
  return {
    type: ACTION.EDIT_TODO,
    payload: title,
  };
};

export const cancelAddingNewTodo = () => {
  return {
    type: ACTION.CANCEL_ADDING_NEW_TODO,
  };
};

export const updateNewTodoTitle = (title) => {
  return {
    type: ACTION.UPDATE_NEW_TODO_TITLE,
    payload: title,
  };
};

export const updateNewTodoContent = (content) => {
  return {
    type: ACTION.UPDATE_NEW_TODO_CONTENT,
    payload: content,
  };
};

export const updateNewTodoDate = (date) => {
  return {
    type: ACTION.UPDATE_NEW_TODO_DATE,
    payload: date,
  };
};

export const saveToLocalStorage = (state) => {
  return () => {
    try {
      localStorage.setItem("todoList", JSON.stringify(state));
    } catch (error) {
      console.log(error);
    }
  };
};

const initTodoListFromLocalStorage = (todoList) => {
  return {
    type: ACTION.INIT_TODO_LIST_FROM_LOCAL_STORAGE,
    payload: todoList,
  };
};

export const getTodoListFromLocalStorage = () => {
  return async (dispatch) => {
    try {
      const todoList = JSON.parse(localStorage.getItem("todoList"));
      dispatch(initTodoListFromLocalStorage(todoList === null ? [] : todoList));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateSearchInput = (searchInput) => {
  return {
    type: ACTION.UPDATE_SERARCH_INPUT,
    payload: searchInput,
  };
};
