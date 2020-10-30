import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchInput, setFilterOption } from "../actions";

// Material-ui
import {
  InputBase,
  IconButton,
  Divider,
  Menu,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FilterIcon from "@material-ui/icons/FilterList";
import { FILTER_OPTIONS } from "../config";

const SearchBar = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const openFilterMenu = Boolean(anchorElement);
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.todoList.searchInput);
  const selectedFilterOption = useSelector(
    (state) => state.selected.filterOption
  );

  const handleChange = (e) => {
    dispatch(updateSearchInput(e.target.value));
  };

  const handleFilterClick = (e) => {
    setAnchorElement(e.currentTarget);
  };

  const handleMenuItemClick = (e) => {
    setAnchorElement(null);
    const { option } = e.currentTarget.dataset;
    dispatch(setFilterOption(option));
  };

  const filterOptions = Object.values(FILTER_OPTIONS);

  return (
    <div className="search-bar">
      <InputBase
        placeholder="Search your todo"
        className="search-input"
        value={searchInput}
        onChange={(e) => handleChange(e)}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Divider orientation="vertical" />
      <IconButton onClick={handleFilterClick}>
        <FilterIcon />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorElement}
        open={openFilterMenu}
        onClose={() => setAnchorElement(null)}
      >
        {filterOptions.map((option) => (
          <MenuItem
            key={option}
            selected={selectedFilterOption === option}
            onClick={handleMenuItemClick}
            data-option={option}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SearchBar;
