import { ACTION } from "../actions/windowActionType";
import { PAGE } from "../pageType";

const initialState = {
  width: 0,
  mobileMode: false,
  currentPage: "",
};

export const windowReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.UPDATE_WIDTH:
      return {
        ...state,
        width: action.payload,
      };
    case ACTION.TOGGLE_MOBILE_MODE:
      const mobileMode = action.payload <= 550 ? true : false;
      const currentPage =
        mobileMode === true
          ? state.currentPage
            ? state.currentPage
            : PAGE.TODO_LIST
          : "";
      return {
        ...state,
        mobileMode: mobileMode,
        currentPage: currentPage,
      };
    case ACTION.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
