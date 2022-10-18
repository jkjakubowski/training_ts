import { FC } from "react";
import styled from "styled-components";

type FlexProps = {
  align_items?: string;
  justify_content?: string;
  row_gap?: number;
  column_gap?: number;
  flex_direction?: string;
  flex_wrap?: string;
};

const Flex: FC<FlexProps> = ({
  align_items,
  justify_content,
  row_gap,
  column_gap,
  flex_direction,
  flex_wrap,
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
    >
      {children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ align_items }) => (align_items ? align_items : "center")};
  justify-content: ${({ justify_content }) => (justify_content ? justify_content : "flex-start")};
  row-gap: ${({ row_gap }) => (row_gap ? `${row_gap}rem` : "0")};
  column-gap: ${({ column_gap }) => (column_gap ? `${column_gap}rem` : "0")};
  flex-direction: ${({ flex_direction }) => (flex_direction ? flex_direction : "row")};
  flex-wrap: ${({ flex_wrap }) => (flex_wrap ? flex_wrap : "nowrap")};
`;

export default Flex;
