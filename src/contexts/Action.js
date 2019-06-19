import React, { useState, createContext } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [action, setActionButtons] = useState([]);
  const setAction = name => {
    switch (name) {
      case "person_1":
        setActionButtons([
          { text: "こんにちは", nextMessage: "bye_1", nextAction: "bye" },
          { text: "さようなら", nextMessage: "bye_1", nextAction: "bye" },
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "person_2":
        setActionButtons([
          { text: "へぇ", nextMessage: "bye_2", nextAction: "bye" },
          { text: "私も！", nextMessage: "bye_2", nextAction: "bye" },
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "bye":
        setActionButtons([
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "map":
      default:
        setActionButtons([]);
        break;
    }
  };

  return (
    <Context.Provider
      value={{
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
