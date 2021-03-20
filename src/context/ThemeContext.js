import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const reducer = (state, action) => {
    const primaryColorMap = {
        "#ffffff": "#181925",
        "#f0ddf8": "#af4d98",
        "#f5e0e4": "#f85a3e",
        "#e2f3e9": "#09814a",
        "#d8fafe": "#1d4087",
        "#181925": "#ffffff",
        "#af4d98": "#f0ddf8",
        "#f85a3e": "#f5e0e4",
        "#09814a": "#e2f3e9",
        "#1d4087": "#d8fafe",
    };
    console.log(action.backgroundColor);

    switch (action.type) {
        case "logoColor":
            if (action.backgroundColor) {
                return {
                    ...state,
                    logoColor: primaryColorMap[action.backgroundColor],
                };
            }
        default:
            return {
                ...state,
                logoColor: primaryColorMap["#ffffff"],
            };
    }
};

const initialState = {
    default: {
        logoColor: "#2a2f35",
    },
    dark: {
        logoColor: "#f2e3e1",
    },
    theme: {
        logoColor: "#2a2f35",
    },
};

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};
