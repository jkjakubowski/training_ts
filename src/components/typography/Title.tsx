import { FC } from "react";
import styled from "styled-components";

type TitleProps = {
  mt: number;
  mb: number;
};

const Title: FC<TitleProps> = ({ mb, mt, children }) => {
  return (
    <StyledTitle mb={mb} mt={mt}>
      {children}
    </StyledTitle>
  );
};

const StyledTitle = styled.h1<TitleProps>`
  font-weight: 800;
  font-size: 3rem;
  margin-top: ${({ mt }) => (mt ? `${mt}rem` : "0")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : "0")};
`;

export default Title;
