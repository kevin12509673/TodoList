import { ACTION } from "./windowActionType";

export const updateWidth = (width) => {
  return {
    type: ACTION.UPDATE_WIDTH,
    payload: width,
  };
};

export const toggleMobileMode = (width) => {
  return {
    type: ACTION.TOGGLE_MOBILE_MODE,
    payload: width,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: ACTION.SET_CURRENT_PAGE,
    payload: page,
  };
};
