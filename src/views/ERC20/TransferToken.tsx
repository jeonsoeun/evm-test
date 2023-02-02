import { useRef, useState } from "react";
import Button from "../../components/button/Button";
import { contractAddress, personalAddress } from "../../config";
import { transferToken } from "../../service/transferERC20";
import { BasicInput, InputWrapper } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const TransferToken = () => {
  const contractRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLInputElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);
  const [isSuccess, setIsSuccess] = useState<string>("");

  const transfer = () => {
    if (
      contractRef?.current?.value &&
      addressRef?.current?.value &&
      amountRef?.current?.value
    ) {
      setIsSuccess("...");
      transferToken(
        contractRef.current.value,
        addressRef.current.value,
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
        <Title>Transfer Token</Title>
        <InputWrapper>
          Countract:{" "}
          <BasicInput
            ref={contractRef}
            defaultValue={contractAddress.erc20PRN}
          />
        </InputWrapper>
        <InputWrapper>
          Address:{" "}
          <BasicInput ref={addressRef} defaultValue={personalAddress.my2} />
        </InputWrapper>
        <InputWrapper>
          Amount: <BasicInput ref={amountRef} defaultValue={"0.01"} />
        </InputWrapper>
        <Button onClick={transfer} margin={"5px 0"}>
          Transfer
        </Button>

        <div>{isSuccess}</div>
      </Section>
    </>
  );
};

export default TransferToken;
