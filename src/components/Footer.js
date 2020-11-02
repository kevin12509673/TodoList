import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTodo,
  deleteTodo,
  cancelAddingNewTodo,
  clearSelectedTodo,
  editTodo,
  setCurrentPage,
  setSelectedTodo,
  focusInputTitle,
} from "../actions";
// Hooks
import useNewTodoSaver from "../hooks/useNewTodoSaver";
// Const
import { PAGE } from "../pageType";
// Materail-ui
import { Button } from "@material-ui/core";
import { Add, Save, Delete, Cancel, Edit, ArrowBack } from "@material-ui/icons";

const Footer = () => {
  const dispatch = useDispatch();
  const newTodoSaver = useNewTodoSaver();
  const isEditing = useSelector((state) => state.todoList.isEditing);
  const seletedTodoTitle = useSelector((state) => state.selected.todo.title);
  const mobileMode = useSelector((state) => state.window.mobileMode);
  const currentPage = useSelector((state) => state.window.currentPage);
  const newTodoTitle = useSelector((state) => state.todoList.newTodo.title);

  const handleSave = () => {
    const saveSuccess = newTodoSaver();
    if (saveSuccess) dispatch(setSelectedTodo(newTodoTitle));
  };

  const handleAdd = () => {
    let saveSuccess = false;
    if (isEditing) {
      saveSuccess = newTodoSaver();
    }
    if (!isEditing || saveSuccess) {
      dispatch(clearSelectedTodo());
      dispatch(focusInputTitle());
      dispatch(setCurrentPage(PAGE.TEXT_CONTENT));
      dispatch(addNewTodo());
    }
  };

  const handleDelete = () => {
    if (!seletedTodoTitle) return;
    if (window.confirm("Are your sure you want to delete this todo?")) {
      dispatch(clearSelectedTodo());
      dispatch(deleteTodo(seletedTodoTitle));
      dispatch(setCurrentPage(PAGE.TODO_LIST));
    }
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Are your sure you want to cancel this edition?" +
          "\n(All the modification will be lost)"
      )
    ) {
      dispatch(cancelAddingNewTodo());
      dispatch(setCurrentPage(PAGE.TODO_LIST));
    }
  };

  const handleEdit = () => {
    dispatch(clearSelectedTodo());
    dispatch(editTodo(seletedTodoTitle));
    dispatch(focusInputTitle());
  };

  const handleBack = () => {
    let saveSuccess = false;
    if (isEditing) saveSuccess = newTodoSaver();
    if (!isEditing || saveSuccess) dispatch(setCurrentPage(PAGE.TODO_LIST));
  };

  return (
    <footer>
      <div className="footer-left">
        {mobileMode && currentPage === PAGE.TEXT_CONTENT && (
          <Button
            startIcon={<ArrowBack />}
            variant="outlined"
            type="button"
            onClick={handleBack}
          >
            Back
          </Button>
        )}
        {(!mobileMode || (mobileMode && currentPage === PAGE.TODO_LIST)) && (
          <Button
            startIcon={<Add />}
            variant="outlined"
            type="button"
            onClick={handleAdd}
          >
            Add
          </Button>
        )}
      </div>
      <div className="footer-right">
        {isEditing ? (
          <>
            <Button
              startIcon={<Save />}
              variant="outlined"
              type="button"
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              startIcon={<Cancel />}
              variant="outlined"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </>
        ) : (
          seletedTodoTitle &&
          (!mobileMode || currentPage === PAGE.TEXT_CONTENT) && (
            <>
              <Button
                startIcon={<Edit />}
                variant="outlined"
                type="button"
                onClick={handleEdit}
              >
                Edit
              </Button>
              <Button
                startIcon={<Delete />}
                variant="outlined"
                type="button"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </>
          )
        )}
      </div>
    </footer>
  );
};

export default Footer;
