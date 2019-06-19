import React, { useContext } from "react";
import styled from "styled-components";

import Button from "./Button";
import Window from "../../contexts/Window";
import Message from "../../contexts/Message";
import Action from "../../contexts/Action";

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 30px;
  display: flex;
  justify-content: space-evenly;
`;

const ActionArea = () => {
  const { setViewerState } = useContext(Window.Context);
  const { setMessage } = useContext(Message.Context);
  const { action, setAction } = useContext(Action.Context);

  // const goMap = () => {
  //   setViewerState("map");
  //   setMessage("map");
  // };

  const makeButtons = () => {
    if (!action) return <></>;
    return action.map((a, i) => (
      <Button
        key={`btn_${i}`}
        onClick={() => {
          if (a.nextMessage) setMessage(a.nextMessage);
          if (a.nextAction) setAction(a.nextAction);
          if (a.nextViewer) setViewerState(a.nextViewer);
        }}
      >
        {a.text}
      </Button>
    ));
  };

  // const buttons = [
  //   <Button key="btn_1" onClick={() => console.log(viewerState)}>
  //     yes
  //   </Button>,
  //   <Button key="btn_2">no</Button>,
  //   <Button key="btn_3" onClick={() => goMap()}>
  //     map
  //   </Button>
  // ];
  return <Wrapper>{makeButtons()}</Wrapper>;
};

export default ActionArea;
