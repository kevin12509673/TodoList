import { combineReducers } from "redux";
import { todoListReducer } from "./todoListReducer";
import { selectedReducer } from "./selectedReducer";
import { windowReducer } from "./windowReducer";
import { shouldFocusReducer } from "./shouldFocusReducer";

export const rootReducer = combineReducers({
  todoList: todoListReducer,
  selected: selectedReducer,
  window: windowReducer,
  shouldFocus: shouldFocusReducer,
});
