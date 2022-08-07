import React, { useContext, useState, useEffect } from "react";



export const ThemeContext = React.createContext({
  theme: undefined,
  setTheme: async (theme) => null,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");
  const my = (thm) => {
    setTheme(thm);
    localStorage.setItem("theme", JSON.stringify(thm));
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    setTheme(JSON.parse(selectedTheme))
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, my }}>
      {children}
    </ThemeContext.Provider>
  );
};
