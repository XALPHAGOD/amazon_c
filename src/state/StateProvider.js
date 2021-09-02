import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //create data layer

export const StateProvider = ({ initialState, reducer, children }) => {
  //wrap app and provide data layer
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext); //pull data wherever required
