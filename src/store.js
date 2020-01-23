import React, { createContext, useReducer } from "react";

const initialState = {
  gameStarted: false,
  selectedLevel: false,
  startError: false,
  openModal: false,
  colorsArray: [],
  clicks: 0,
  time: {},
  gameFinished: false,
  openScoreModal: false,
  openScoreModalView: false,
  nickname: null
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
      case "SET_COLORS_ARRAY":
        return { ...state, colorsArray: action.colorsArray };
      case "ADD_CLICK":
        return { ...state, clicks: state.clicks + 1 };
      case "FINISH_GAME":
        return { ...state, gameFinished: action.gameFinished };
      case "SET_TIME":
        return { ...state, time: action.time };
      case "OPEN_SCORE_MODAL":
        return { ...state, openScoreModal: action.openScoreModal };
      case "VALUE_NICKNAME":
        return { ...state, nickname: action.nickname };
      case "RESET_GAME":
        return {
          gameStarted: false,
          selectedLevel: false,
          startError: false,
          openModal: false,
          colorsArray: [],
          clicks: 0,
          time: 0,
          gameFinished: false
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
