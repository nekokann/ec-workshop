import React, { useState, createContext } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [viewerState, setViewerState] = useState("map");

  return (
    <Context.Provider
      value={{
        viewerState,
        setViewerState
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default {
  Provider,
  Context
};
