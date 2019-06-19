import React from "react";
import styled from "styled-components";

import Viewer from "./Viewer/Viewer";
import TextBox from "./TextBox/TextBox";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Viewer />
      <TextBox />
    </Container>
  );
};

export default App;
