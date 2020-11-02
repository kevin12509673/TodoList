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
  const newTodoTitle = useSelector((state) => state.todoList?.newTodo.title);
  const newTodoContent = useSelector(
    (state) => state.todoList?.newTodo.content
  );
  const newTodoDate = useSelector((state) => state.todoList?.newTodo.date);

  // Selet existing todo
  const todoList = useSelector((state) => state.todoList?.todoList);
  const selectedTodoTitle = useSelector((state) => state.selected.todo.title);
  const [selectedTodoContent, setSelectedTodoContent] = useState("");
  const [selectedTodoDate, setSelectedTodoDate] = useState("");

  // Set focus
  const shouldFocusInputTitle = useSelector(
    (state) => state.shouldFocus.inputTitle
  );

  useEffect(() => {
    if (shouldFocusInputTitle) inputFocuser(inputTitleRef);
  }, [shouldFocusInputTitle, inputTitleRef, inputFocuser]);

  useEffect(() => {
    const selectedTodo = todoList.filter(
      (todo) => todo.title === selectedTodoTitle
    )[0];
    setSelectedTodoContent(selectedTodo?.content);
    setSelectedTodoDate(selectedTodo?.date);
  }, [selectedTodoTitle, todoList]);

  // const toggleContentDisplay =
  //   selectedTodoTitle || isEditing ? { display: "block" } : { display: "none" };
  const toggleContentDisplay = {
    display: selectedTodoTitle || isEditing ? "block" : "none",
  };

  // const togglePageDisplay =
  //   currentPage === PAGE.TEXT_CONTENT || !mobileMode
  //     ? { display: "block" }
  //     : { display: "none" };
  const togglePageDisplay = {
    display:
      currentPage === PAGE.TEXT_CONTENT || !mobileMode ? "block" : "none",
  };

  const toggleContentHeaderFlex = {
    flexDirection:
      currentPage === PAGE.TEXT_CONTENT && mobileMode ? "column" : "row",
  };

  const inputPropsStyle = {
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
  };

  return (
    <div className="text-content" style={togglePageDisplay}>
      {
        <div className="content-wrapper" style={toggleContentDisplay}>
          <div
            className="content-header-wrapper"
            style={toggleContentHeaderFlex}
          >
            <TextField
              inputRef={inputTitleRef}
              className="content-title"
              inputProps={{
                style: inputPropsStyle,
              }}
              InputLabelProps={{
                style: inputPropsStyle,
              }}
              type="text"
              placeholder="New Title"
              onChange={(e) => dispatch(updateNewTodoTitle(e.target.value))}
              value={
                isEditing
                  ? newTodoTitle
                  : selectedTodoTitle
                  ? selectedTodoTitle
                  : ""
              }
              label={isEditing ? "Title" : " "}
              disabled={selectedTodoTitle ? true : false}
            />
            <TextField
              className="content-date"
              inputProps={{
                style: { lineHeight: "1.5rem", fontSize: "1.5rem" },
              }}
              type="date"
              onChange={(e) => {
                dispatch(updateNewTodoDate(e.target.value));
              }}
              value={isEditing ? newTodoDate : selectedTodoDate || ""}
              min="2000-1-1"
              max="2100-12-31"
              disabled={selectedTodoTitle ? true : false}
            />
          </div>
          <textarea
            placeholder={isEditing ? "Enter your todo items!" : ""}
            onChange={(e) => dispatch(updateNewTodoContent(e.target.value))}
            value={
              isEditing
                ? newTodoContent
                : selectedTodoContent
                ? selectedTodoContent
                : ""
            }
            disabled={selectedTodoTitle}
          />
        </div>
      }
    </div>
  );
};

export default TextContent;
