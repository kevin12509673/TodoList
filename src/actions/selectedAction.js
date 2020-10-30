import { ACTION } from "./selectedActionType";

export const setSelectedTodo = (title) => {
  return {
    type: ACTION.SET_SELECTED_TODO,
    payload: title,
  };
};

export const clearSelectedTodo = () => {
  return {
    type: ACTION.CLEAR_SELECTED_TODO,
  };
};

export const setFilterOption = (option) => {
  return {
    type: ACTION.SET_FILTER_OPTION,
    payload: option,
  };
};
