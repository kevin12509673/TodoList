import { ACTION } from "../actions/shouldFocusActionType";

const initialState = {
  inputTitle: false,
};

export const shouldFocusReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FOCUS_INPUT_TITLE:
      return {
        ...state,
        inputTitle: true,
      };
    case ACTION.FOCUS_INPUT_TITLE_DONE:
      return {
        ...state,
        inputTitle: false,
      };
    default:
      return state;
  }
};
