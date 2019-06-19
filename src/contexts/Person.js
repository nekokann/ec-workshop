import React, { useState, createContext } from "react";
import Person1 from "../images/person_1.png";
import Person2 from "../images/person_2.png";

const Context = createContext();
const Provider = ({ children }) => {
  const [person, setPersonImage] = useState();
  const setPerson = name => {
    switch (name) {
      case "person_1":
        setPersonImage(Person1);
        break;
      case "person_2":
        setPersonImage(Person2);
        break;
      default:
        break;
    }
  };

  return (
    <Context.Provider
      value={{
        person,
        setPerson
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
