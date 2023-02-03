import { useRef, useState } from "react";
import Button from "../../components/button/Button";
import { contractAddress, personalAddress } from "../../config";
import { transferFromToken } from "../../service/transferERC20";
import { BasicInput, InputWrapper } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const TransferFromToken = () => {
  const contractRef = useRef<HTMLInputElement | null>(null);
  const fromAddressRef = useRef<HTMLInputElement | null>(null);
  const toAddressRef = useRef<HTMLInputElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);
  const [isSuccess, setIsSuccess] = useState<string>("");

  const onClickTransfer = () => {
    if (
      contractRef?.current?.value &&
      fromAddressRef?.current?.value &&
      toAddressRef?.current?.value &&
      amountRef?.current?.value
    ) {
      setIsSuccess("...");
      transferFromToken(
        contractRef.current.value,
        fromAddressRef.current.value,
        toAddressRef.current.value,
        amountRef.current.value
      ).then((isSuccess) => {
        if (isSuccess) {
          setIsSuccess("Success");
        } else {
          setIsSuccess("Fail ");
        }
      });
    }
  };
  return (
    <>
      <Section>
        <Title>TransferFrom Token</Title>
        <InputWrapper>
          Countract:{" "}
          <BasicInput
            ref={contractRef}
            defaultValue={contractAddress.erc20PRN}
          />
        </InputWrapper>
        <InputWrapper>
          From Address:{" "}
          <BasicInput ref={fromAddressRef} defaultValue={personalAddress.my2} />
        </InputWrapper>
        <InputWrapper>
          To Address:{" "}
          <BasicInput ref={toAddressRef} defaultValue={personalAddress.my} />
        </InputWrapper>
        <InputWrapper>
          Amount: <BasicInput ref={amountRef} defaultValue={"10"} />
        </InputWrapper>
        <Button onClick={onClickTransfer} margin={"5px 0"}>
          TransferFrom
        </Button>

        <div>{isSuccess}</div>
      </Section>
    </>
  );
};

export default TransferFromToken;
