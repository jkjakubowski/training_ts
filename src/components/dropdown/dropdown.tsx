import { useState } from "react";
import styled from "styled-components";

const Dropdown = ({ values, onChildClickHandler }: { values: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onDropdownClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledDiv onClick={onDropdownClickHandler}>
        <div>Filter by currency</div>
        <Chevron>▾</Chevron>
      </StyledDiv>

      {isOpen &&
        values.map((value) => {
          return (
            <Child key={value}>
              <button onClick={() => onChildClickHandler(value)}> {value}</button>
            </Child>
          );
        })}
    </>
  );
};

const StyledDiv = styled.div`
  padding: 10px;
  background: #87a2fb;
  cursor: pointer;
  display: flex;
  max-width: 180px;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Child = styled.div`
  transition: scale ease-in-out 0.1s, opacity ease-in-out 0.1s, transform 2s;
  scale: 0.95;
  opacity: 1;
  background: pink;
  max-width: 100px;
`;

const Chevron = styled.div`
  margin-left: 10px;
`;

export default Dropdown;
