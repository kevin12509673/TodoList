import { ACTION } from "./shouldFocusActionType";

export const focusInputTitle = () => {
  return {
    type: ACTION.FOCUS_INPUT_TITLE,
  };
};

export const focusInputTitleDone = () => {
  return {
    type: ACTION.FOCUS_INPUT_TITLE_DONE,
  };
};
