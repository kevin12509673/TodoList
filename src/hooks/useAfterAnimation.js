import { btnAnimationTime } from "../config";

const useAfterAnimation = () => {
  const afterAnimation = (callback) => {
    setTimeout(callback, btnAnimationTime);
  };
  return afterAnimation;
};

export default useAfterAnimation;
