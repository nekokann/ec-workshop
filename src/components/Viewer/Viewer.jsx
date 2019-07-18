import React, { useContext } from "react";
import styled from "styled-components";

import Dialog from "./Dialog";
import Map from "./Map";
import Window from "../../contexts/Window";
import Progress from "../../contexts/Progress";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: #fefaf1; */
`;

const Viewer = () => {
  const { viewerState } = useContext(Window.Context);
  const { progress } = useContext(Progress.Context);

  if (progress <= 1) {
    return <Dialog />;
  }

  switch (viewerState) {
    case "dialog":
      return <Dialog />;
    case "map":
      return <Map />;
    default:
      return <Wrapper>top</Wrapper>;
  }
};

export default Viewer;
