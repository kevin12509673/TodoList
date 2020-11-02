import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateNewTodoTitle,
  updateNewTodoContent,
  updateNewTodoDate,
} from "../actions";

// Hooks
import useInputFocuser from "../hooks/useInputFocuser";

import { PAGE } from "../pageType";
// Material-ui
import { TextField } from "@material-ui/core";

// const TextContent = ({ inputTitleRef }) => {
const TextContent = () => {
  const dispatch = useDispatch();
  const inputFocuser = useInputFocuser();
  const inputTitleRef = useRef(null);

  // Mobile mode
  const mobileMode = useSelector((state) => state.window.mobileMode);
  const currentPage = useSelector((state) => state.window.currentPage);

  // Edit new todo
  const isEditing = useSelector((state) => state.todoList?.isEditing);
  const newTodo = useSelector((state) => state.todoList.newTodo);

  // Select existing todo
  const todoList = useSelector((state) => state.todoList?.todoList);
  const selectedTodoTitle = useSelector((state) => state.selected.todo.title);
  const [selectedTodoContent, setSelectedTodoContent] = useState("");
  const [selectedTodoDate, setSelectedTodoDate] = useState("");

  // Focus state
  const shouldFocusInputTitle = useSelector(
    (state) => state.shouldFocus.inputTitle
  );

  useEffect(() => {
    // Set focus on input
    if (shouldFocusInputTitle) inputFocuser(inputTitleRef);
  }, [shouldFocusInputTitle, inputTitleRef, inputFocuser]);

  useEffect(() => {
    // Display selected todo
    const selectedTodo = todoList.filter(
      (todo) => todo.title === selectedTodoTitle
    )[0];
    setSelectedTodoContent(selectedTodo?.content);
    setSelectedTodoDate(selectedTodo?.date);
  }, [selectedTodoTitle, todoList]);

  // Logical element
  const displayTitle = isEditing
    ? newTodo.title
    : selectedTodoTitle
    ? selectedTodoTitle
    : "";
  const displayDate = isEditing ? newTodo.date : selectedTodoDate || "";
  const displayContent = isEditing
    ? newTodo.content
    : selectedTodoContent
    ? selectedTodoContent
    : "";
  const disabledOnTodoSelected = selectedTodoTitle ? true : false;

  // Style
  const togglePageDisplayStyle = {
    display:
      currentPage === PAGE.TEXT_CONTENT || !mobileMode ? "block" : "none",
  };
  const toggleContentDisplayStyle = {
    display: selectedTodoTitle || isEditing ? "block" : "none",
  };
  const toggleContentHeaderFlexStyle = {
    flexDirection:
      currentPage === PAGE.TEXT_CONTENT && mobileMode ? "column" : "row",
  };
  const inputPropsStyle = {
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
  };

  return (
    <div className="text-content" style={togglePageDisplayStyle}>
      {
        <div className="content-wrapper" style={toggleContentDisplayStyle}>
          <div
            className="content-header-wrapper"
            style={toggleContentHeaderFlexStyle}
          >
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
            <TextField
              className="content-date"
              inputProps={{ style: inputPropsStyle }}
              type="date"
              onChange={(e) => dispatch(updateNewTodoDate(e.target.value))}
              value={displayDate}
              min="2000-1-1"
              max="2100-12-31"
              disabled={disabledOnTodoSelected}
            />
          </div>
          <textarea
            placeholder={isEditing ? "Enter your todo items!" : ""}
            onChange={(e) => dispatch(updateNewTodoContent(e.target.value))}
            value={displayContent}
            disabled={disabledOnTodoSelected}
          />
        </div>
      }
    </div>
  );
};

export default TextContent;
