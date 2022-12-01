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
    if (theme === Themes.Light) {
      dispatch(setTheme(Themes.Dark));
    } else {
      dispatch(setTheme(Themes.Light));
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTheme(e.target.checked ? Themes.Light : Themes.Dark));
  };

  return (
    <Wrapper onClick={toggleTheme}>
      <input id="toggle" className="toggle" type="checkbox" checked={isDark} onChange={onChange} />
      <label htmlFor="toggle" className="title">
        Switch to {isDark ? "Light mode" : "Dark mode"}
      </label>
    </Wrapper>
  );
};

export default ThemeButton;
