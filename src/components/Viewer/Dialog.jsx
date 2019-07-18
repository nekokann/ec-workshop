import React, { useContext } from "react";
import styled from "styled-components";
import Person from "../../contexts/Person";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: #fefaf1; */
  display: flex;
  justify-content: center;
`;
const PersonImage = styled.img`
  max-height: 100%;
`;
const PersonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dialog = () => {
  const { person } = useContext(Person.Context);
  return (
    <Wrapper>
      {person ? (
        <PersonWrapper>
          <PersonImage src={person} alt="person" />
        </PersonWrapper>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};
export default Dialog;
