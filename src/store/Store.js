import PropTypes from "prop-types";
import React from "react";
import { createContext, useReducer } from "react";

import { initialState, reducer } from "../reducer/reducer";

export const Context = createContext(initialState);

export const Store = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ globalState, dispatch }}>
      {children}
    </Context.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.any,
};
