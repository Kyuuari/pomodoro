import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const initial = {
  primary: "#282c34",
  secondary: "#5493dd",
};

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? JSON.parse(localTheme) : initial;
  });
  //   if (localStorage) {
  //     setColor(JSON.parse(localStorage.getItem("theme")));
  //   } else {
  //     setColor(initial);
  //   }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(color));
    return () => {};
  }, [color]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
