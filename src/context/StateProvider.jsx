import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

// Create the context
export const StateContext = createContext();

// Create a provider component
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Define prop types
StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

// Custom hook to use the state context
export const useStateValue = () => useContext(StateContext);
