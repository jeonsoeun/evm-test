import { useRef, useState } from "react";
import Button from "../../components/button/Button";
import { contractAddress, personalAddress } from "../../config";
import { approve } from "../../service/approveERC20";
import { BasicInput, InputWrapper } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const Approve = () => {
  const contractRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLInputElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);
  const [isSuccess, setIsSuccess] = useState<string>("");

  const onClickApprove = () => {
    if (
      contractRef?.current?.value &&
      addressRef?.current?.value &&
      amountRef?.current?.value
    ) {
      setIsSuccess("...");
      approve(
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
        <Title>Approve Token</Title>
        <InputWrapper>
          Countract:{" "}
          <BasicInput
            ref={contractRef}
            defaultValue={contractAddress.erc20PRN}
          />
        </InputWrapper>
        <InputWrapper>
          Spender Address:{" "}
          <BasicInput ref={addressRef} defaultValue={personalAddress.my2} />
        </InputWrapper>
        <InputWrapper>
          Amount: <BasicInput ref={amountRef} defaultValue={"1000"} />
        </InputWrapper>
        <Button onClick={onClickApprove} margin={"5px 0"}>
          Approve
        </Button>
        <div>{isSuccess}</div>
      </Section>
    </>
  );
};

export default Approve;
