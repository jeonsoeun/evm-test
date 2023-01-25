import { ReactNode } from "react";
import styled, { css } from "styled-components/macro";
import { color } from "../../styles/variable/colors";
export interface IButtonStyleProps {
  background?: string;
  disableBackground?: string;
  hoverBackground?: string;
  styleWidth?: string;
  styleHeight?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadious?: string;
  fontSize?: string;
  textColor?: string;
  fontWeight?: string;
}

export const buttonStyle = css<IButtonStyleProps>`
  display: inline-block;
  width: ${(props) => props.styleWidth ?? "auto"};
  height: ${(props) => props.styleHeight ?? "auto"};
  background: ${(props) => props.background ?? color.primary};
  padding: ${(props) => props.padding ?? "5px 10px"};
  margin: ${(props) => props.margin ?? "0 5px 0 0"};
  border: ${(props) => props.border ?? "none"};
  border-radius: ${(props) => props.borderRadious ?? "10px"};
  color: ${(props) => props.textColor ?? "#fff"};
  font-weight: ${(props) => props.fontWeight ?? "500"};
  font-size: ${(props) => props.fontSize ?? "16px"};
  width: ${(props) => props.styleWidth ?? "auto"};
  &:hover {
    background: ${(props) =>
      props.hoverBackground ?? props.background ?? color.primaryDark};
    color: ${(props) => props.textColor ?? "#fff"};
  }
  &:disabled {
    ${(props) => {
      if (props.disableBackground) {
        return css`
          background: ${props.disableBackground};
        `;
      }
      return css`
        opacity: 0.3;
      `;
    }}
  }
`;

export interface IButtonProps extends IButtonStyleProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
  return <ButtonComponent {...props}></ButtonComponent>;
};

const ButtonComponent = styled.button<IButtonStyleProps>`
  ${buttonStyle}
`;

export default Button;
