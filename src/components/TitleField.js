import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNewTodoTitle } from "../actions";
import useInputFocuser from "../hooks/useInputFocuser";
import { inputPropsStyle } from "../config";

import { TextField } from "@material-ui/core";

const TitleField = () => {
  const dispatch = useDispatch();
  const inputTitleRef = useRef(null);
  const isEditing = useSelector((state) => state.todoList?.isEditing);
  const newTodo = useSelector((state) => state.todoList.newTodo);
  const selectedTodoTitle = useSelector((state) => state.selected.todo.title);
  const shouldFocusInputTitle = useSelector(
    (state) => state.shouldFocus.inputTitle
  );
  const inputFocuser = useInputFocuser();

  useEffect(() => {
    // Set focus
    if (shouldFocusInputTitle) inputFocuser(inputTitleRef);
  }, [shouldFocusInputTitle, inputTitleRef, inputFocuser]);

  const disabledOnTodoSelected = selectedTodoTitle ? true : false;
  const displayTitle = isEditing
    ? newTodo.title
    : selectedTodoTitle
    ? selectedTodoTitle
    : "";
  return (
    <TextField
      inputRef={inputTitleRef}
      className="content-title"
      inputProps={{ style: inputPropsStyle }}
      InputLabelProps={{ style: inputPropsStyle }}
      type="text"
      placeholder="New Title"
      onChange={(e) => dispatch(updateNewTodoTitle(e.target.value))}
      value={displayTitle}
      label={isEditing ? "Title" : " "}
      disabled={disabledOnTodoSelected}
    />
  );
};

export default TitleField;
