import React from "react";
import cat from "../img/bg-img.png";

const Header = () => {
  return (
    <header>
      <img src={cat} alt="" />
      <span>Memo List</span>
    </header>
  );
};

export default Header;
