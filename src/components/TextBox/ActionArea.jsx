import React, { useContext } from "react";
import styled from "styled-components";

import Button from "./Button";
import Window from "../../contexts/Window";
import Message from "../../contexts/Message";
import Action from "../../contexts/Action";
import Progress from "../../contexts/Progress";
import Person from "../../contexts/Person";

const Wrapper = styled.div`
  width: 90%;
  padding: 30px 30px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ActionArea = () => {
  const { setViewerState } = useContext(Window.Context);
  const { setMessage } = useContext(Message.Context);
  const { action, setAction } = useContext(Action.Context);
  const { setPerson } = useContext(Person.Context);
  const { progress, setProgress } = useContext(Progress.Context);

  const makeButtons = () => {
    if (!action) return <></>;
    if (progress === 0) {
      setMessage("start");
      setPerson("start");
      return (
        <Button
          onClick={() => {
            setMessage("opening_1");
            setPerson("saru");
            setAction("opening_1");
            setProgress(1);
          }}
        >
          はじめる
        </Button>
      );
    }

    return action.map((a, i) => (
      <Button
        key={`btn_${i}`}
        onClick={() => {
          if (a.nextMessage) setMessage(a.nextMessage);
          if (a.nextAction) setAction(a.nextAction);
          if (a.nextViewer) setViewerState(a.nextViewer);
          if (a.nextPerson) setPerson(a.nextPerson);
          if (a.nextProgress) setProgress(a.nextProgress);
        }}
      >
        {a.text}
      </Button>
    ));
  };

  return <Wrapper>{makeButtons()}</Wrapper>;
};

export default ActionArea;
