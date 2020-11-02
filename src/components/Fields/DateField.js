import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNewTodoDate } from "../../actions";
import { TextField } from "@material-ui/core";
import { inputPropsStyle } from "../../config";
const DateField = () => {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.todoList?.isEditing);
  const newTodo = useSelector((state) => state.todoList.newTodo);
  const todoList = useSelector((state) => state.todoList?.todoList);
  const selectedTodoTitle = useSelector((state) => state.selected.todo.title);
  const [selectedTodoDate, setSelectedTodoDate] = useState("");

  useEffect(() => {
    // Display selected todo
    const selectedTodo = todoList.filter(
      (todo) => todo.title === selectedTodoTitle
    )[0];
    setSelectedTodoDate(selectedTodo?.date);
  }, [selectedTodoTitle, todoList]);

  const date = isEditing ? newTodo.date : selectedTodoDate || "";
  const disabledOnTodoSelected = selectedTodoTitle ? true : false;
  return (
    <TextField
      className="content-date"
      inputProps={{ style: inputPropsStyle }}
      type="date"
      onChange={(e) => dispatch(updateNewTodoDate(e.target.value))}
      value={date}
      min="2000-1-1"
      max="2100-12-31"
      disabled={disabledOnTodoSelected}
    />
  );
};

export default DateField;
