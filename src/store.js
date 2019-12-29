import React, { createContext, useReducer } from "react";

const initialState = { gameStarted: false, selectedLevel: "" };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "START_GAME":
        return { ...state, gameStarted: true };
      case "SELECT_LEVEL":
        return { ...state, selectedLevel: action.selectedLevel };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
