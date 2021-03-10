import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const reducer = (state, action) => {
    console.log(action.type);
    console.log(action.theme);
    switch (action.type) {
        case "theme":
            console.log("here i am");
            if (action.theme) {
                return {
                    ...state,
                    theme: state[action.theme],
                };
            }
        default:
            console.log();
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
