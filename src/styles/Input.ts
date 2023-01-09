import styled from "styled-components";
import { color } from "./variable/colors";

export const BasicInput = styled.input`
  width: 500px;
  padding: 8px;
  border-radius: 5px;
  font-size: 16px;
  border: 2px solid ${color.primary};
`;

export const InputWrapper = styled.div`
  padding: 10px 10px 0px 10px;
`;
