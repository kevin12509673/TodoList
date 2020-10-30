import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodoListFromLocalStorage } from "../actions";

// Components
import TodoTab from "./TodoTab";

// Hooks
import useFilteredTodoList from "../hooks/useFilteredTodoList";

const TodoTabs = () => {
  const dispatch = useDispatch();
  const newTodoTitle = useSelector((state) => state.todoList?.newTodo.title);
  const isEditing = useSelector((state) => state.todoList?.isEditing);
  const seletedTodoTitle = useSelector((state) => state.selected?.todo?.title);
  const filteredTodoList = useFilteredTodoList();

  useEffect(() => {
    dispatch(getTodoListFromLocalStorage());
  }, [dispatch]);

  return (
    <div className="todo-tabs">
      {isEditing && <TodoTab title={newTodoTitle} isEditing={isEditing} />}
      {filteredTodoList.map((todo) => (
        <TodoTab
          key={todo.title}
          title={todo.title}
          isSelected={seletedTodoTitle === todo.title}
        />
      ))}
    </div>
  );
};

export default TodoTabs;
