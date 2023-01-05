import { useState } from "react";
import styled from "styled-components/macro";
import Web3 from "web3";
import Button from "../components/button/Button";
import Page from "../components/page/Page";
import { HorizontalCenterFlexBox } from "../components/styled/flex";
import { createAddress } from "../service/createAddress";
import { color } from "../styles/variable/colors";

const MainPage: React.FC = () => {
  const [privateKey, setPrivateKey] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const onClickCreateAddress = () => {
    const account = createAddress();
    setPrivateKey(account.privateKey);
    setAddress(account.address);
  };
  return (
    <Page>
      <CreateAddressWrapper>
        <Button
          onClick={onClickCreateAddress}
          fontSize="20px"
          padding="10px 20px"
        >
          Create Address
        </Button>
      </CreateAddressWrapper>
      <InputWrapper>
        Private Key: <KeyDisplayInput value={privateKey} readOnly />
      </InputWrapper>
      <InputWrapper>
        Address: <KeyDisplayInput value={address} readOnly />
      </InputWrapper>
    </Page>
  );
};

const CreateAddressWrapper = styled(HorizontalCenterFlexBox)`
  padding: 10px;
  margin-top: 30px;
  text-align: center;
`;
const InputWrapper = styled.div`
  padding: 20px 10px 0px 10px;
`;
const KeyDisplayInput = styled.input`
  margin-top: 20px;
  width: 500px;
  padding: 8px;
  border-radius: 5px;
  font-size: 16px;
  border: 2px solid ${color.primary};
`;

export default MainPage;
