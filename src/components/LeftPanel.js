import React from "react";
import { useSelector } from "react-redux";

// Compnents
import TodoTabs from "./TodoTabs";
import SearchBar from "./SearchBar";

// Const
import { PAGE } from "../pageType";

const LeftPanel = () => {
  // Mobile mode
  const mobileMode = useSelector((state) => state.window.mobileMode);
  const currentPage = useSelector((state) => state.window.currentPage);
  const togglePageDisplay = {
    display: currentPage === PAGE.TODO_LIST || !mobileMode ? "block" : "none",
  };

  return (
    <div className="left-panel" style={togglePageDisplay}>
      <SearchBar />
      <TodoTabs />
    </div>
  );
};

export default LeftPanel;
