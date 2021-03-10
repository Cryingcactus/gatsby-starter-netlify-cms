import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "theme":
            if (action.theme) {
                return {
                    ...state,
                    theme: state[action.theme],
                };
            }
        default:
            return {
                ...state,
                theme: state.default,
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
