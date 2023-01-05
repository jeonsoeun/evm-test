import styled from "styled-components/macro";

export const FlexBox = styled.div`
  display: flex;
`;

export const HorizontalCenterFlexBox = styled(FlexBox)`
  justify-content: center;
`;

export const VerticalCenterFlexBox = styled(FlexBox)`
  align-items: center;
`;

export const CenterFlexBox = styled(FlexBox)`
  align-items: center;
  justify-content: center;
`;
