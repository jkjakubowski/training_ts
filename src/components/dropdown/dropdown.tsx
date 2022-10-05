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

      {isOpen && (
        <ChildContainer>
          {values.map((value) => {
            return (
              <Child key={value} onClick={() => onChildClickHandler(value)}>
                {value}
              </Child>
            );
          })}
        </ChildContainer>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  margin-bottom: 1rem;
  width: 180px;
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
  scale: 0.95;
  opacity: 1;
  width: 100%;
  cursor: pointer;
  padding-left: 10px;
  &:hover {
    background: #d3dcfc9f;
  }
`;

const ChildContainer = styled.div`
  transition: all ease-in-out 0.1s, opacity ease-in-out 0.1s, transform 2s;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  padding: 10px 0px;
`;

const Chevron = styled.div`
  margin-left: 10px;
`;

export default Dropdown;
