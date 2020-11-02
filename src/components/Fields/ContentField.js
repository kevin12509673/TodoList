import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNewTodoContent } from "../../actions";

const ContentField = () => {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.todoList?.isEditing);
  const newTodo = useSelector((state) => state.todoList.newTodo);
  const todoList = useSelector((state) => state.todoList?.todoList);
  const selectedTodoTitle = useSelector((state) => state.selected.todo.title);
  const [selectedTodoContent, setSelectedTodoContent] = useState("");

  useEffect(() => {
    // Display selected todo
    const selectedTodo = todoList.find(
      (todo) => todo.title === selectedTodoTitle
    );
    setSelectedTodoContent(selectedTodo?.content);
  }, [selectedTodoTitle, todoList]);

  const disabledOnTodoSelected = selectedTodoTitle ? true : false;
  const content = isEditing
    ? newTodo.content
    : selectedTodoContent
    ? selectedTodoContent
    : "";
  return (
    <textarea
      placeholder={isEditing ? "Enter your todo items!" : ""}
      onChange={(e) => dispatch(updateNewTodoContent(e.target.value))}
      value={content}
      disabled={disabledOnTodoSelected}
    />
  );
};

export default ContentField;
