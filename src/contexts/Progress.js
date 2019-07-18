import React, { useState, createContext } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  return (
    <Context.Provider
      value={{
        progress,
        setProgress
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
