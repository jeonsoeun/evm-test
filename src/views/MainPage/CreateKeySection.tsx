import { useState } from "react";
import styled from "styled-components/macro";
import Button from "../../components/button/Button";
import { createAddress } from "../../service/createAddress";
import { BasicInput } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const CreateKeySection: React.FC = () => {
  const [privateKey, setPrivateKey] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const onClickCreateAddress = () => {
    const account = createAddress();
    setPrivateKey(account.privateKey);
    setAddress(account.address);
  };
  return (
    <Section>
      <Title>계정 생성</Title>
      <CreateAddressWrapper>
        <Button
          onClick={onClickCreateAddress}
          fontSize="20px"
          padding="10px 20px"
        >
          Create Private Key
        </Button>
      </CreateAddressWrapper>
      <InputWrapper>
        Private Key: <BasicInput value={privateKey} readOnly />
      </InputWrapper>
      {/* <InputWrapper>
        Address: <BasicInput value={address} readOnly />
      </InputWrapper> */}
    </Section>
  );
};

const CreateAddressWrapper = styled.div`
  margin-top: 10px;
`;
const InputWrapper = styled.div`
  padding: 10px 10px 0px 10px;
`;

export default CreateKeySection;
