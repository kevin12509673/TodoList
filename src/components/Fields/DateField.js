import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNewTodoDate } from "../../actions";
import { TextField } from "@material-ui/core";
import { inputPropsStyle } from "../../config";
// Hooks
import useSelectedTodo from "../../hooks/useSelectedTodo";
// Configs
import { DATE_INPUT_RANGE } from "../../config";
const DateField = () => {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.todoList?.isEditing);
  const newTodo = useSelector((state) => state.todoList.newTodo);
  const selectedTodoTitle = useSelector((state) => state.selected.todo.title);
  const { selectedTodo } = useSelectedTodo();

  const date = isEditing ? newTodo.date : selectedTodo.date || "";
  const disabledOnTodoSelected = selectedTodoTitle ? true : false;
  return (
    <TextField
      className="content-date"
      inputProps={{ style: inputPropsStyle }}
      type="date"
      onChange={(e) => dispatch(updateNewTodoDate(e.target.value))}
      value={date}
      min={DATE_INPUT_RANGE.MIN}
      max={DATE_INPUT_RANGE.MAX}
      disabled={disabledOnTodoSelected}
    />
  );
};

export default DateField;
