import { FC } from "react";
import styled from "styled-components";

type FlexProps = {
  align_items: string;
  justify_content: string;
  row_gap: number;
  column_gap: number;
  flex_direction: string;
  flex_wrap: string;
  pt: number;
  pb: number;
  pl: number;
  pr: number;
  mt: number;
  mb: number;
};

const Flex: FC<FlexProps> = ({
  align_items,
  justify_content,
  row_gap,
  column_gap,
  flex_direction,
  flex_wrap,
  pt,
  pb,
  pl,
  pr,
  mt,
  mb,
  children,
}) => {
  return (
    <StyledFlex
      align_items={align_items}
      justify_content={justify_content}
      row_gap={row_gap}
      column_gap={column_gap}
      flex_direction={flex_direction}
      flex_wrap={flex_wrap}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
    >
      {children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ align_items }) => (align_items ? align_items : "center")};
  justify-content: ${({ justify_content }) => (justify_content ? justify_content : "center")};
  row-gap: ${({ row_gap }) => (row_gap ? `${row_gap}rem` : "0")};
  column-gap: ${({ column_gap }) => (column_gap ? `${column_gap}rem` : "0")};
  flex-direction: ${({ justify_content }) => (justify_content ? justify_content : "center")};

  flex-wrap: ${({ flex_wrap }) => (flex_wrap ? flex_wrap : "nowrap")};
  padding-top: ${({ pt }) => (pt ? `${pt}rem` : "0")};
  padding-bottom: ${({ pb }) => (pb ? `${pb}rem` : "0")};
  padding-left: ${({ pl }) => (pl ? `${pl}rem` : "0")};
  padding-right: ${({ pr }) => (pr ? `${pr}rem` : "0")};
  margin-top: ${({ mt }) => (mt ? `${mt}rem` : "0")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : "0")};
`;

export default Flex;
