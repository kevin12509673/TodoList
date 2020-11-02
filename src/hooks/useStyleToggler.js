import { useSelector } from "react-redux";
// Implementation not completed

const useStyleToggler = (pageToDisplay, styleOption = {}) => {
  const mobileMode = useSelector((state) => state.window.mobileMode);
  const currentPage = useSelector((state) => state.window.currentPage);

  const displayStyle = {
    display: currentPage === pageToDisplay || !mobileMode ? "block" : "none",
  };

  let style = {};
  if (styleOption.display) style = Object.assign(style, displayStyle);
  if (styleOption.flexDirection)
    style = Object.assign(style, flexDirectionStyle);
  console.log(style);

  return { style };
};

export default useStyleToggler;
