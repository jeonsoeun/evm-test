import { useRef, useState } from "react";
import styled from "styled-components/macro";
import Button from "../../components/button/Button";
import { contractAddress } from "../../config";
import { getCount } from "../../service/getCount";
import { BasicInput } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const PrintCounterNumber: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(contractAddress.counter);
  const [count, setCount] = useState<string>("");
  const onClickGetAddress = async () => {
    if (inputValue) {
      const count = await getCount(inputValue);
      setCount(count);
    }
  };
  return (
    <Section>
      <Title>Counter 출력</Title>
      <InputWrapper>
        Counter Contract: <BasicInput value={inputValue} />
        <Button onClick={onClickGetAddress} fontSize="20px" padding="10px 20px">
          Get Count
        </Button>
      </InputWrapper>
      <InputWrapper>
        Count: <BasicInput value={count} readOnly />
      </InputWrapper>
    </Section>
  );
};

const CreateAddressWrapper = styled.div`
  margin-top: 10px;
`;
const InputWrapper = styled.div`
  padding: 10px 10px 0px 10px;
`;

export default PrintCounterNumber;
