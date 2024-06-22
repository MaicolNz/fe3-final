import React, { createContext, useMemo, useReducer } from "react";

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(initialState);

const contextReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "FAVORITES":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const initContextReducer = () => ({
  theme: "light",
  data: localStorage.getItem("favoritesDentists")
    ? JSON.parse(localStorage.getItem("favoritesDentists"))
    : []
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState, initContextReducer);

  const memoizedState = useMemo(() => {
    localStorage.setItem("favoritesDentists", JSON.stringify(state.data));
    return { state, dispatch };
  }, [state]);

  return (
    <ContextGlobal.Provider value={memoizedState}>
      {children}
    </ContextGlobal.Provider>
  );
};
