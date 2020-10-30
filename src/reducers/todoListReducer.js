import { ACTION } from "../actions/todoListActionType";

const inititalState = {
  todoList: [],
  isEditing: false,
  newTodo: {
    title: "",
    content: "",
    date: new Date().toLocaleDateString("en-CA"),
  },
  searchInput: "",
};

export const todoListReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION.ADD_NEW_TODO:
      return {
        ...state,
        isEditing: true,
      };
    case ACTION.SAVE_NEW_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            title: state.newTodo.title,
            content: state.newTodo.content,
            date: state.newTodo.date,
          },
        ],
        isEditing: false,
        newTodo: {
          title: "",
          content: "",
          date: new Date().toLocaleDateString("en-CA"),
        },
      };
    case ACTION.DELETE_TODO: {
      const filteredTodoList = state.todoList.filter(
        (todo) => todo.title !== action.payload
      );
      return {
        ...state,
        todoList: filteredTodoList,
      };
    }
    case ACTION.EDIT_TODO: {
      const newTodo = state.todoList.filter(
        (todo) => todo.title === action.payload
      )[0];
      const filteredTodoList = state.todoList.filter(
        (todo) => todo.title !== action.payload
      );
      return {
        ...state,
        isEditing: true,
        todoList: filteredTodoList,
        newTodo: {
          title: newTodo.title,
          content: newTodo.content,
          date: newTodo.date,
        },
      };
    }
    case ACTION.CANCEL_ADDING_NEW_TODO:
      return {
        ...state,
        isEditing: false,
        newTodo: {
          title: "",
          content: "",
          date: new Date().toLocaleDateString("en-CA"),
        },
      };
    case ACTION.UPDATE_NEW_TODO_TITLE:
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          title: action.payload,
        },
      };
    case ACTION.UPDATE_NEW_TODO_CONTENT:
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          content: action.payload,
        },
      };
    case ACTION.UPDATE_NEW_TODO_DATE:
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          date: action.payload,
        },
      };
    case ACTION.INIT_TODO_LIST_FROM_LOCAL_STORAGE:
      return {
        ...state,
        todoList: action.payload,
      };
    case ACTION.UPDATE_SERARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    default:
      return state;
  }
};
