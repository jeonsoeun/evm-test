import { useRef, useState } from "react";
import Button from "../../components/button/Button";
import { contractAddress } from "../../config";
import { sendTransaction } from "../../service/sendTransaction";
import { BasicInput, InputWrapper } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const SendTransaction: React.FC = () => {
  const addrInputRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [txHash, setTxHash] = useState<string>("");
  const onClickGetAddress = async () => {
    if (inputRef?.current?.value) {
      await sendTransaction(
        addrInputRef?.current?.value ?? "",
        inputRef?.current?.value ?? "",
        (txhash) => {
          setTxHash(txhash);
        }
      );
    }
  };
  return (
    <Section>
      <Title>Transaction 전송</Title>
      <InputWrapper>
        <span>
          {/* Private key: <BasicInput ref={addrInputRef} /> */}
          보내는 주소: <BasicInput ref={addrInputRef} />
          <br />
          수량: <BasicInput ref={inputRef} />
        </span>
        <Button onClick={onClickGetAddress} fontSize="20px" padding="10px 20px">
          Send ETH
        </Button>
      </InputWrapper>
      <InputWrapper>
        TxHash: <BasicInput value={txHash} readOnly />
      </InputWrapper>
    </Section>
  );
};

export default SendTransaction;
