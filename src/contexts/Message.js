import React, { useState, createContext } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [message, setMessageText] = useState(
    `クリックしてヒントを探してください`
  );

  const setMessage = name => {
    switch (name) {
      case "person_1":
        setMessageText(`おう、よくきたな。`);
        break;
      case "bye_1":
        setMessageText(`じゃあな。`);
        break;
      case "person_2":
        setMessageText(`虫取り大好き！`);
        break;
      case "bye_2":
        setMessageText(`じゃあねー。`);
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
