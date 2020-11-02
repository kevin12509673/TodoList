import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNewTodoTitle } from "../../actions";
import useInputFocuser from "../../hooks/useInputFocuser";
import { inputPropsStyle } from "../../config";
// Hooks
import useSelectedTodo from "../../hooks/useSelectedTodo";

import { TextField } from "@material-ui/core";

const TitleField = () => {
  const dispatch = useDispatch();
  const inputTitleRef = useRef(null);
  const isEditing = useSelector((state) => state.todoList?.isEditing);
  const newTodo = useSelector((state) => state.todoList.newTodo);
  const shouldFocusInputTitle = useSelector(
    (state) => state.shouldFocus.inputTitle
  );
  const inputFocuser = useInputFocuser();
  const { selectedTodo } = useSelectedTodo();

  useEffect(() => {
    // Set focus
    if (shouldFocusInputTitle) inputFocuser(inputTitleRef);
  }, [shouldFocusInputTitle, inputTitleRef, inputFocuser]);

  const disabledOnTodoSelected = selectedTodo.title ? true : false;
  const title = isEditing ? newTodo.title : selectedTodo.title || "";
  const label = isEditing ? "Title" : " ";
  return (
    <TextField
      inputRef={inputTitleRef}
      className="content-title"
      inputProps={{ style: inputPropsStyle }}
      InputLabelProps={{ style: inputPropsStyle }}
      type="text"
      placeholder="New Title"
      onChange={(e) => dispatch(updateNewTodoTitle(e.target.value))}
      value={title}
      label={label}
      disabled={disabledOnTodoSelected}
    />
  );
};

export default TitleField;
