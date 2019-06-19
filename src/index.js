import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Window from "./contexts/Window";
import Person from "./contexts/Person";
import Message from "./contexts/Message";
import Action from "./contexts/Action";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Action.Provider>
    <Message.Provider>
      <Person.Provider>
        <Window.Provider>
          <App />
        </Window.Provider>
      </Person.Provider>
    </Message.Provider>
  </Action.Provider>,
  rootElement
);
