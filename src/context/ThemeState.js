import React, { createContext, useState } from "react"

export const ThemeContext = createContext();

const initial = {
    primary: "#282c34",
    secondary: "#5493dd"
}

export const ThemeProvider = ({ children }) => {
    const [color, setColor] = useState(initial)

    return (
        <ThemeContext.Provider value={{ color, setColor }}>
            {children}
        </ThemeContext.Provider>
    );
}