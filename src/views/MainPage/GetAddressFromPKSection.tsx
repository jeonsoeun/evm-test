import { useRef, useState } from "react";
import styled from "styled-components/macro";
import Button from "../../components/button/Button";
import { createAddress } from "../../service/createAddress";
import { getAddressFromPrivateKey } from "../../service/getAddress";
import { BasicInput, InputWrapper } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const GetAddressFromPKSection: React.FC = () => {
  const privateKeyInputRef = useRef<HTMLInputElement | null>(null);
  const [address, setAddress] = useState<string>("");
  const onClickGetAddress = () => {
    if (privateKeyInputRef?.current?.value) {
      const account = getAddressFromPrivateKey(
        privateKeyInputRef.current.value
      );
      setAddress(account.address);
    }
  };
  return (
    <Section>
      <Title>Private Key로 Address 가져오기</Title>
      <InputWrapper>
        Private Key: <BasicInput ref={privateKeyInputRef} />{" "}
        <Button onClick={onClickGetAddress} fontSize="20px" padding="10px 20px">
          Get Address
        </Button>
      </InputWrapper>
      <InputWrapper>
        Address: <BasicInput value={address} readOnly />
      </InputWrapper>
    </Section>
  );
};

export default GetAddressFromPKSection;
