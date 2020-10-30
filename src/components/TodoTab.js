import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTodo, setCurrentPage } from "../actions";
import useNewTodoSaver from "../hooks/useNewTodoSaver";
import useAfterAnimation from "../hooks/useAfterAnimation";

import { PAGE } from "../pageType";

import { Card, CardActionArea } from "@material-ui/core";

const TodoTab = ({ isEditing, isSelected, title }) => {
  const dispatch = useDispatch();
  const newTodoSaver = useNewTodoSaver();
  const afterAnimation = useAfterAnimation();
  const mobileMode = useSelector((state) => state.window.mobileMode);
  const isUserEditing = useSelector((state) => state.todoList.isEditing);

  const handleSelectTodoTab = () => {
    let saveSuccess = { saveSuccess: false };
    if (isUserEditing) saveSuccess = newTodoSaver();
    if (!isUserEditing || saveSuccess) {
      dispatch(setSelectedTodo(title));
      afterAnimation(() => dispatch(setCurrentPage(PAGE.TEXT_CONTENT)));
    }
  };

  return (
    <Card>
      <CardActionArea onClick={handleSelectTodoTab}>
        <div className="todo-tab" data-selected={!mobileMode ? isSelected : ""}>
          {isEditing ? (
            <span className="tab-title-editing">
              {title ? title : "Editing..."}
            </span>
          ) : (
            <span className="tab-title">{title}</span>
          )}
        </div>
      </CardActionArea>
    </Card>
  );
};

export default TodoTab;
