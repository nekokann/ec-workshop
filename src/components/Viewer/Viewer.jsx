import React, { useContext } from "react";
import styled from "styled-components";

import Dialog from "./Dialog";
import Map from "./Map";
import Window from "../../contexts/Window";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  background-color: #fefaf1;
`;

const Viewer = () => {
  const { viewerState } = useContext(Window.Context);
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
