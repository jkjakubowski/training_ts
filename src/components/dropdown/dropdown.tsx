import { useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onDropdownClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledDiv onClick={onDropdownClickHandler}>
        <div>toto</div>
        <Chevron>▾</Chevron>
      </StyledDiv>

      {isOpen && (
        <Child>
          <p>Open</p>
        </Child>
      )}
    </>
  );
};

const StyledDiv = styled.div`
  padding: 10px;
  background: blueviolet;
  cursor: pointer;
  display: flex;
`;

const Child = styled.div`
  transition: scale ease-in-out 0.1s, opacity ease-in-out 0.1s, transform 2s;
  scale: 0.95;
  opacity: 1;
  background: pink;
`;

const Chevron = styled.div`
  margin-left: 10px;
`;

export default Dropdown;
