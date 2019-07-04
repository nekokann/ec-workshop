import React, { useState, createContext } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [message, setMessageText] = useState(
    `クリックしてヒントを探してください`
  );

  const setMessage = name => {
    switch (name) {
      case "person_1":
        setMessageText(`なにか用かね?`);
        break;
      case "bye_1":
        setMessageText(`おお、そうかい。`);
        break;
      case "person_2":
        setMessageText(`ども`);
        break;
      case "bye_2":
        setMessageText(`ども`);
        break;
      case "person_3":
        setMessageText(`やぁ`);
        break;
      case "bye_3":
        setMessageText(`やぁ`);
        break;
      case "person_4":
        setMessageText(`げんき？`);
        break;
      case "bye_4":
        setMessageText("じゃあね");
        break;
      case "map":
        setMessageText(`クリックしてヒントを探してください`);
        break;
      default:
        break;
    }
  };
  return (
    <Context.Provider
      value={{
        message,
        setMessage
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
