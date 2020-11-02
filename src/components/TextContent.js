import React from "react";
import { useSelector } from "react-redux";
// Components
import TitleField from "./TitleField";
import DateField from "./DateField";
import ContentField from "./ContentField";

// Const
import { PAGE } from "../pageType";
// Material-ui

const TextContent = () => {
  // Mobile mode
  const mobileMode = useSelector((state) => state.window.mobileMode);
  const currentPage = useSelector((state) => state.window.currentPage);

  const isEditing = useSelector((state) => state.todoList?.isEditing);
  const selectedTodoTitle = useSelector((state) => state.selected.todo.title);

  // Style
  const togglePageDisplayStyle = {
    display:
      currentPage === PAGE.TEXT_CONTENT || !mobileMode ? "block" : "none",
  };
  const toggleContentDisplayStyle = {
    display: selectedTodoTitle || isEditing ? "block" : "none",
  };
  const toggleFlexDirectionStyle = {
    flexDirection:
      currentPage === PAGE.TEXT_CONTENT && mobileMode ? "column" : "row",
  };

  return (
    <div className="text-content" style={togglePageDisplayStyle}>
      {
        <div className="content-wrapper" style={toggleContentDisplayStyle}>
          <div
            className="content-header-wrapper"
            style={toggleFlexDirectionStyle}
          >
            <TitleField />
            <DateField />
          </div>
          <ContentField />
        </div>
      }
    </div>
  );
};

export default TextContent;
