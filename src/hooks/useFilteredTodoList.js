import { useSelector } from "react-redux";
import { FILTER_OPTIONS } from "../config";

const useFilteredTodoList = () => {
  const todoList = useSelector((state) => state.todoList.todoList);
  const searchInput = useSelector((state) => state.todoList.searchInput);
  const selectedFilterOption = useSelector(
    (state) => state.selected.filterOption
  );

  if (todoList === null || todoList === undefined) return [];
  let filteredTodoList = [];
  if (searchInput !== "")
    filteredTodoList = todoList.filter((todo) =>
      todo.title.includes(searchInput)
    );
  else {
    filteredTodoList = todoList;
  }

  const compare = (a, b) => {
    switch (selectedFilterOption) {
      case FILTER_OPTIONS.DATE_ASCENDING:
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
      case FILTER_OPTIONS.DATE_DECENDING:
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      case FILTER_OPTIONS.TITLE_ASCENDING:
        return a.title.localeCompare(b.title, "zh-hant");
      case FILTER_OPTIONS.TITLE_DECENDING:
        return b.title.localeCompare(a.title, "zh-hant");
      default:
        return 0;
    }
  };

  const sortedTodoList = [...filteredTodoList].sort(compare);
  return sortedTodoList;
};

export default useFilteredTodoList;
