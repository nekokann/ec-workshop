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
            nextMessage: "bye_1",
            nextAction: "bye"
          },
          { text: "なんでもないです", nextMessage: "bye_1", nextAction: "bye" },
          { text: "誰ですか？", nextMessage: "bye_1", nextAction: "bye" },
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
      case "person_4":
        setActionButtons([
          {
            text: "はい",
            nextMessage: "bye_3",
            nextAction: "bye"
          },
          {
            text: "いいえ",
            nextMessage: "bye_3",
            nextAction: "bye"
          },
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
      case "opening_1":
        setActionButtons([
          {
            text: "次へ",
            nextMessage: "opening_2",
            nextAction: "opening_2",
            nextPerson: "wani"
          }
        ]);
        break;
      case "opening_2":
        setActionButtons([
          {
            text: "次へ",
            nextMessage: "opening_3",
            nextAction: "opening_3",
            nextPerson: "niwatori"
          }
        ]);
        break;
      case "opening_3":
        setActionButtons([
          {
            text: "ゲームスタート！",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map",
            nextProgress: 2
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
