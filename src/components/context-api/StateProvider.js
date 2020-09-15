import React, { createContext, useContext, useReducer } from "react";

// Creates The data Layer
export const StateContext = createContext();

// Wraps the app and provides data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Children is APP.js

// Pulls information from data layer
export const useStaeValue = () => useContext(StateContext);
