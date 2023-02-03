import { useRef, useState } from "react";
import Button from "../../components/button/Button";
import { contractAddress, personalAddress } from "../../config";
import { getAllowence } from "../../service/getErc20Data";
import { BasicInput, InputWrapper } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const GetAllowence = () => {
  const contractRef = useRef<HTMLInputElement | null>(null);
  const ownerAddressRef = useRef<HTMLInputElement | null>(null);
  const spenderAddressRef = useRef<HTMLInputElement | null>(null);
  const [amount, setAmount] = useState<string>("");

  const onClickButton = () => {
    if (
      contractRef?.current?.value &&
      ownerAddressRef?.current?.value &&
      spenderAddressRef?.current?.value
    ) {
      setAmount("");
      getAllowence(
        contractRef.current.value,
        ownerAddressRef.current.value,
        spenderAddressRef.current.value
      )
        .then((res) => {
          if (res) {
            setAmount(`${res}`);
          } else {
            setAmount(`Not Allowed`);
          }
        })
        .catch((err) => {
          setAmount(`Fail`);
        });
    }
  };
  return (
    <>
      <Section>
        <Title>Get Allowence</Title>
        <InputWrapper>
          Countract:{" "}
          <BasicInput
            ref={contractRef}
            defaultValue={contractAddress.erc20PRN}
          />
        </InputWrapper>
        <InputWrapper>
          Owner Address:{" "}
          <BasicInput ref={ownerAddressRef} defaultValue={personalAddress.my} />
        </InputWrapper>
        <InputWrapper>
          Spender Address:{" "}
          <BasicInput
            ref={spenderAddressRef}
            defaultValue={personalAddress.my2}
          />
        </InputWrapper>
        <Button onClick={onClickButton} margin={"5px 0"}>
          Get Allowence
        </Button>
        <div>Amount: {amount}</div>
      </Section>
    </>
  );
};

export default GetAllowence;
