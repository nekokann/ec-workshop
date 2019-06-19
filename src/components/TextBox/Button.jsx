import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Clickable = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  padding: 1rem;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  border-radius: 10px;
  text-align: center;
  background-color: #fff3f5;
  &:hover {
    box-shadow: 0 0 5px #000;
  }
  &:active {
    box-shadow: 0 0;
  }
`;

const Button = props => (
  <Wrapper>
    <Clickable href="javascript:void(0)" {...props}>
      <Text>{props.children}</Text>
    </Clickable>
  </Wrapper>
);
export default Button;
