import React, { useContext } from "react";
import styled from "styled-components";

import Clock from "../../images/clock.png";
import Table from "../../images/table.png";
import Window from "../../contexts/Window";
import Person from "../../contexts/Person";
import Message from "../../contexts/Message";
import Action from "../../contexts/Action";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  background-color: #eafaf6;
  position: relative;
`;

const Item = styled.img`
  max-height: 100px;
  position: absolute;
`;

const Map = () => {
  const { setViewerState } = useContext(Window.Context);
  const { setPerson } = useContext(Person.Context);
  const { setMessage } = useContext(Message.Context);
  const { setAction } = useContext(Action.Context);

  const setPerson1 = () => {
    setPerson("person_1");
    setMessage("person_1");
    setAction("person_1");
    setViewerState("dialog");
  };
  const setPerson2 = () => {
    setPerson("person_2");
    setMessage("person_2");
    setAction("person_2");
    setViewerState("dialog");
  };
  return (
    <Wrapper>
      <Item
        style={{ top: "0px", left: "100px" }}
        onClick={() => setPerson1()}
        src={Clock}
        alt="clock"
      />
      <Item
        style={{ bottom: "0px", right: "100px" }}
        onClick={() => setPerson2()}
        src={Table}
        alt="table"
      />
    </Wrapper>
  );
};

export default Map;
