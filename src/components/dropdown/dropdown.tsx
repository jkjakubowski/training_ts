import { useState } from "react";
import styled from "styled-components";

const Dropdown = ({ values, onChildClickHandler }: { values: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onDropdownClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <StyledDiv onClick={onDropdownClickHandler}>
        <div>Filter by currency</div>
        <Chevron>▾</Chevron>
      </StyledDiv>

      {isOpen &&
        values.map((value) => {
          return (
            <Child key={value} onClick={() => onChildClickHandler(value)}>
              {value}
            </Child>
          );
        })}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  margin-bottom: 1rem;
`;

const StyledDiv = styled.div`
  padding: 10px;
  background: #87a2fb;
  cursor: pointer;
  display: flex;
  max-width: 180px;
  border-radius: 8px;
  margin-bottom: 0.2rem;
`;

const Child = styled.div`
  transition: scale ease-in-out 0.1s, opacity ease-in-out 0.1s, transform 2s;
  scale: 0.95;
  opacity: 1;
  background: pink;
  max-width: 100px;
  cursor: pointer;
  &:hover {
    background: #f3758a;
  }
`;

const Chevron = styled.div`
  margin-left: 10px;
`;

export default Dropdown;
