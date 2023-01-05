import { ReactNode } from "react";
import styled from "styled-components/macro";
import { buttonStyle, IButtonStyleProps } from "./Button";

export interface IButtonProps extends IButtonStyleProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  href: string;
  disabled?: boolean;
  children?: ReactNode;
  isLoading?: boolean;
}

const AnchorButton: React.FC<IButtonProps> = (props) => {
  return <AnchorComponent {...props}></AnchorComponent>;
};

const AnchorComponent = styled.a<IButtonStyleProps>`
  ${buttonStyle};
  text-decoration: none;
`;

export default AnchorButton;
