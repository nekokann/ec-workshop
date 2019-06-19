import React, { useState, createContext } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [viewerState, setViewerState] = useState("map");
  const [message, setMessage] = useState("hello, world");
  const [action, setAction] = useState();

  return (
    <Context.Provider
      value={{
        viewerState,
        setViewerState,
        message,
        setMessage,
        action,
        setAction
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
