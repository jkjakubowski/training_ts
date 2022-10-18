import { FC } from "react";
import styled from "styled-components";

type SpacingProps = {
  mt: string;
  mb: string;
  ml: string;
  mr: string;
  pt: string;
  pb: string;
  pl: string;
  pr: string;
};

const Spacing: FC<SpacingProps> = ({ mb, mt, ml, mr, pt, pb, pl, pr, children }) => {
  return (
    <StyledSpacing mb={mb} mt={mt} ml={ml} mr={mr} pt={pt} pb={pb} pl={pl} pr={pr}>
      {children}
    </StyledSpacing>
  );
};

const StyledSpacing = styled.div<SpacingProps>`
  margin-top: ${({ mt }) => (mt ? `${mt}rem` : "0")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : "0")};
  margin-left: ${({ ml }) => (ml ? `${ml}rem` : "0")};
  margin-right: ${({ mr }) => (mr ? `${mr}rem` : "0")};
  padding-top: ${({ pt }) => (pt ? `${pt}rem` : "0")};
  padding-bottom: ${({ pb }) => (pb ? `${pb}rem` : "0")};
  padding-left: ${({ pl }) => (pl ? `${pl}rem` : "0")};
  padding-right: ${({ pr }) => (pr ? `${pr}rem` : "0")};
`;

export default Spacing;
