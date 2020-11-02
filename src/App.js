import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateWidth, toggleMobileMode } from "./actions";

//import components
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import Footer from "./components/Footer";
import TextContent from "./components/TextContent";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const handleResize = useCallback(() => {
    dispatch(updateWidth(window.innerWidth));
    dispatch(toggleMobileMode(window.innerWidth));
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateWidth(window.innerWidth));
    dispatch(toggleMobileMode(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, dispatch]);

  return (
    <div className="App">
      <Header />
      <LeftPanel />
      <TextContent />
      <Footer />
    </div>
  );
}

export default App;
