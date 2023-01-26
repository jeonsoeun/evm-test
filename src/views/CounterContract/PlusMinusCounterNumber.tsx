import { useRef, useState } from "react";
import Button from "../../components/button/Button";
import { contractAddress } from "../../config";
import { addCount, minusCount, resetCount } from "../../service/getCount";
import { BasicInput, InputWrapper } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const PlusMinusCounterNumber: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const [inputValue, setInputValue] = useState<string>(contractAddress.counter);
  const [isSuccess, setIsSuccess] = useState<string>("");
  const onClickPlus = async () => {
    setIsSuccess("...");
    if (inputRef?.current?.value) {
      const result = await addCount(inputRef?.current?.value);
      if (result) {
        setIsSuccess("Success");
      } else {
        setIsSuccess("Failed");
      }
    }
  };
  const onClickMinus = async () => {
    setIsSuccess("...");
    if (inputRef?.current?.value) {
      const result = await minusCount(inputRef?.current?.value);
      if (result) {
        setIsSuccess("Success");
      } else {
        setIsSuccess("Failed");
      }
    }
  };
  const onClickReset = async () => {
    setIsSuccess("...");
    if (inputRef?.current?.value) {
      const result = await resetCount(inputRef?.current?.value);
      if (result) {
        setIsSuccess("Success");
      } else {
        setIsSuccess("Failed");
      }
    }
  };
  return (
    <Section>
      <Title>Plus or Minus</Title>
      <InputWrapper>
        Counter Contract:{" "}
        <BasicInput ref={inputRef} defaultValue={contractAddress.counter2} />
      </InputWrapper>
      <InputWrapper>
        <Button onClick={onClickPlus} fontSize="20px" padding="10px 20px">
          +
        </Button>
        <Button onClick={onClickMinus} fontSize="20px" padding="10px 20px">
          -
        </Button>
        <Button onClick={onClickReset} fontSize="20px" padding="10px 20px">
          reset
        </Button>
      </InputWrapper>
      <InputWrapper>Result: {isSuccess}</InputWrapper>
    </Section>
  );
};

export default PlusMinusCounterNumber;
