import { ReactNode } from "react";
import styled from "styled-components/macro";

interface IProps {
  children?: ReactNode;
}
const Page: React.FC<IProps> = (props) => {
  return (
    <FullFillDiv>
      <MaxWidthDiv>{props.children}</MaxWidthDiv>
    </FullFillDiv>
  );
};

export const FullFillDiv = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const MaxWidthDiv = styled.div`
  max-width: 1700px;
  margin: auto;
`;

export default Page;
