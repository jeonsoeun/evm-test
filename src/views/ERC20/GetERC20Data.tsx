import { useRef, useState } from "react";
import Button from "../../components/button/Button";
import { contractAddress, personalAddress } from "../../config";
import {
  getBalanceOf,
  getDecimal,
  getName,
  getSymbol,
  getTotalSupply,
} from "../../service/getErc20Data";
import { BasicInput, InputWrapper } from "../../styles/Input";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

const GetERC20Data = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const contractRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLInputElement | null>(null);
  const [name, setname] = useState<string>("");
  const [symbol, setsymbol] = useState<string>("");
  const [decimals, setdecimals] = useState<number | undefined>();
  const [totalSupply, settotalSupply] = useState<number | undefined>();
  const [balanceOf, setbalanceOf] = useState<number | undefined>();
  const getErc20Data = () => {
    if (inputRef?.current?.value) {
      getName(inputRef.current.value).then((value) => setname(value));
      getSymbol(inputRef.current.value).then((value) => setsymbol(value));
      getDecimal(inputRef.current.value).then((value) => setdecimals(value));
      getTotalSupply(inputRef.current.value).then((value) =>
        settotalSupply(value)
      );
    }
  };
  const execBalanceOf = () => {
    if (contractRef?.current?.value && addressRef?.current?.value) {
      getBalanceOf(contractRef.current.value, addressRef.current.value).then(
        (balance) => setbalanceOf(balance)
      );
    }
  };
  return (
    <>
      <Section>
        <Title>Get Data of ERC20 Token </Title>
        <InputWrapper>
          Countract:{" "}
          <BasicInput ref={inputRef} defaultValue={contractAddress.erc20PRN} />
          <Button onClick={getErc20Data}>Execute Methods</Button>
        </InputWrapper>
        <div>
          name(): <span>{name}</span>
        </div>
        <div>
          symbol(): <span>{symbol}</span>
        </div>
        <div>
          decimals(): <span>{decimals}</span>
        </div>
        <div>
          totalSupply(): <span>{totalSupply}</span>
        </div>
      </Section>
      <Section>
        <Title>BalanceOf </Title>
        <InputWrapper>
          Countract:{" "}
          <BasicInput
            ref={contractRef}
            defaultValue={contractAddress.erc20PRN}
          />
        </InputWrapper>
        <InputWrapper>
          Address:{" "}
          <BasicInput ref={addressRef} defaultValue={personalAddress.my} />
        </InputWrapper>
        <div>
          <Button onClick={execBalanceOf}>Get Balance</Button>
        </div>
        <div>
          balanceOf(): <span>{balanceOf}</span>
        </div>
      </Section>
    </>
  );
};

export default GetERC20Data;
