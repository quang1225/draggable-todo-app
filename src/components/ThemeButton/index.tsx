import React from "react";
import { useAppContext } from "../../AppContext";
import { Themes } from "../../models/todo";
import { setTheme } from "../../store/actions";
import { Wrapper } from "./styles";

const ThemeButton = () => {
  const {
    state: { theme },
    dispatch,
  } = useAppContext();

  const isDark = theme === Themes.Dark;

  const toggleTheme = () => {
    console.log("toggleTheme");
    if (theme === Themes.Light) {
      dispatch(setTheme(Themes.Dark));
    } else {
      dispatch(setTheme(Themes.Light));
    }
  };

  return (
    <Wrapper onClick={toggleTheme}>
      <input className="toggle" type="checkbox" checked={isDark} />
      <label className="title">Switch to {isDark ? "Light mode" : "Dark mode"}</label>
    </Wrapper>
  );
};

export default ThemeButton;
