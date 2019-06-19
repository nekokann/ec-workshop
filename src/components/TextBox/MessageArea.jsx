import React, { useContext } from "react";
import styled from "styled-components";

import Message from "../../contexts/Message";

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 30px;
`;

const MessageArea = () => {
  const { message } = useContext(Message.Context);
  return <Wrapper>{message}</Wrapper>;
};
export default MessageArea;
