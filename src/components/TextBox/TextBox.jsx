import React from "react";
import styled from "styled-components";

import MessageArea from "./MessageArea";
import ActionArea from "./ActionArea";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextBox = () => (
  <Wrapper>
    <MessageArea />
    <ActionArea />
  </Wrapper>
);

export default TextBox;
