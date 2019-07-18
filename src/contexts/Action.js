import React, { useState, createContext } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [action, setActionButtons] = useState([]);
  const setAction = name => {
    switch (name) {
      case "person_1":
        setActionButtons([
          {
            text: "英語を教えてください",
            nextMessage: "person_1_a",
            nextAction: "person_1_2"
          },
          { text: "誰ですか？", nextMessage: "bye_1_a", nextAction: "bye" },
          {
            text: "なんでもないです",
            nextMessage: "bye_1",
            nextAction: "bye",
          }
        ]);
        break;
        case "person_1_2":
        setActionButtons([
          {
            text: "英語で星",
            nextMessage: "person_1_b",
            nextAction: "person_1_2"
          },
          { text: "英語でお金", nextMessage: "person_1_c", nextAction: "person_1_2" },
          {
            text: "英語で三角",
            nextMessage: "person_1_d",
            nextAction: "person_1_2",
          },
          { text: "英語で水", nextMessage: "person_1_e", nextAction: "person_1_2" },
          { text: "英語で魚", nextMessage: "person_1_f", nextAction: "person_1_2" },
          { text: "十分です", nextMessage: "bye_1", nextAction: "bye" },
        ]);
        break;
      case "person_2":
        setActionButtons([
          { text: "赤", nextMessage: "bye_2", nextAction: "bye" },
          { text: "青", nextMessage: "bye_2", nextAction: "bye" },
          { text: "黄", nextMessage: "bye_2", nextAction: "bye" },
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "person_3":
        setActionButtons([
          {
            text: "いま何時ですか",
            nextMessage: "bye_3",
            nextAction: "bye"
          },
          { text: "なんでもいです", nextMessage: "bye_3", nextAction: "bye" },
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
