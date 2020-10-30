import { useDispatch } from "react-redux";
import { focusInputTitleDone } from "../actions";

const useInputFocuser = () => {
  const dispatch = useDispatch();
  const focusInput = (ref) => {
    if (ref === null || ref === undefined) return;
    if (ref.current === null || ref.current === undefined) return;
    ref.current.focus();
    dispatch(focusInputTitleDone());
  };
  return focusInput;
};

export default useInputFocuser;
