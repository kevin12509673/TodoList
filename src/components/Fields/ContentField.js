import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNewTodoContent } from "../../actions";
// Hooks
import useSelectedTodo from "../../hooks/useSelectedTodo";

const ContentField = () => {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.todoList?.isEditing);
  const newTodo = useSelector((state) => state.todoList.newTodo);
  const { selectedTodo } = useSelectedTodo();

  const disabledOnTodoSelected = selectedTodo.title ? true : false;
  const content = isEditing ? newTodo.content : selectedTodo.content || "";
  const placeholder = isEditing ? "Enter your todo items!" : "";
  return (
    <textarea
      placeholder={placeholder}
      onChange={(e) => dispatch(updateNewTodoContent(e.target.value))}
      value={content}
      disabled={disabledOnTodoSelected}
    />
  );
};

export default ContentField;
