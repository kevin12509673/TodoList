import { FILTER_OPTIONS } from "../config";
import { ACTION } from "../actions/selectedActionType";

const initialState = {
  todo: {
    title: "",
  },
  filterOption: FILTER_OPTIONS.DATE_ASCENDING,
};

export const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_SELECTED_TODO:
      return {
        ...state,
        todo: { title: action.payload },
      };
    case ACTION.CLEAR_SELECTED_TODO:
      return {
        ...state,
        todo: {
          title: "",
        },
      };
    case ACTION.SET_FILTER_OPTION:
      return {
        ...state,
        filterOption: action.payload,
      };
    default:
      return state;
  }
};
