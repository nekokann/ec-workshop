import React, { useState, createContext } from "react";
import Person1 from "../images/person_1.png";
import Person2 from "../images/person_2.png";
import Person3 from "../images/person_3.png";
import Person4 from "../images/person_4.png";
import Saru from "../images/saru.png";
import Niwatori from "../images/niwatori.png";
import Wani from "../images/wani.png";
import Start from "../images/emblem.gif";

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
      case "person_3":
        setPersonImage(Person3);
        break;
      case "person_4":
        setPersonImage(Person4);
        break;
      case "saru":
        setPersonImage(Saru);
        break;
      case "niwatori":
        setPersonImage(Niwatori);
        break;
      case "wani":
        setPersonImage(Wani);
        break;
      case "start":
        setPersonImage(Start);
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
