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
        case "person_1_a":
        setMessageText(`どの英語を知りたいのかな？`);
        break
        case "person_1_b":
        setMessageText(`星は英語でstarと言うんだよ`);
        break
        case "person_1_c":
        setMessageText(`お金は英語でmanyと言うんだよ`);
        break
        case "person_1_d":
        setMessageText(`三角は英語でtriangleと言うんだよ`);
        break
        case "person_1_e":
        setMessageText(`水は英語でwaterと言うんだよ`);
        break
        case "person_1_f":
        setMessageText(`魚は英語でfishと言うんだよ`);
        break
      case "bye_1":
        setMessageText(`おお、そうかい。`);
        break;
        case "bye_1_a":
        setMessageText(`自分から名乗らないとは失礼な！`);
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
      case "start":
        setMessageText("脱出ゲームスタート！");
        break;
      case "opening_1":
        setMessageText("うほうほ、うききー！");
        break;
      case "opening_2":
        setMessageText("ワニニッ！ワニニニッ");
        break;
      case "opening_3":
        setMessageText("コケーッ、コッコッコ！");
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
