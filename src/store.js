import React, { createContext, useReducer } from "react";

const initialState = {
  gameStarted: false,
  selectedLevel: false,
  startError: false,
  openModal: false
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "START_GAME":
        return { ...state, gameStarted: true };
      case "START_ERROR":
        return { ...state, startError: action.startError };
      case "OPEN_MODAL":
        return { ...state, openModal: action.openModal };
      case "SELECT_LEVEL":
        return { ...state, selectedLevel: action.selectedLevel };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
