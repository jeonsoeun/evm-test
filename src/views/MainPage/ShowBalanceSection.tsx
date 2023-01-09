import { useRef, useState } from "react";
import Button from "../../components/button/Button";
import { getAddressFromPrivateKey } from "../../service/getAddress";
import { getBalance } from "../../service/getBalance";
import { BasicInput, InputWrapper } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const ShowBalanceSection: React.FC = () => {
  const addressRef = useRef<HTMLInputElement | null>(null);
  const [balance, setBalance] = useState<string>("");
  const onClickGetAddress = async () => {
    if (addressRef?.current?.value) {
      setBalance(await getBalance(addressRef.current.value));
    }
  };
  return (
    <Section>
      <Title>잔액 조회</Title>
      <InputWrapper>
        Address: <BasicInput ref={addressRef} />
        <Button onClick={onClickGetAddress} fontSize="20px" padding="10px 20px">
          Get Balance
        </Button>
      </InputWrapper>
      <InputWrapper>
        Balance: <BasicInput value={balance} readOnly />
      </InputWrapper>
    </Section>
  );
};

export default ShowBalanceSection;
