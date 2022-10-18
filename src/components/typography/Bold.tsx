import { FC } from "react";
import styled from "styled-components";

const Bold: FC = ({ children }) => {
  return <StyledBold>{children}</StyledBold>;
};

const StyledBold = styled.p`
  font-weight: 700;
`;

export default Bold;
