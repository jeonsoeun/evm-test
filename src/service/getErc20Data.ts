import BigNumber from "bignumber.js";
import Web3 from "web3";
import { config } from "../config";
import ABI from "../config/erc20ABI.json";

export async function getName(contractAddress: string) {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const res = contract.methods.name().call();
  return res;
}

export async function getSymbol(contractAddress: string) {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const res = contract.methods.symbol().call();
  return res;
}

export async function getTotalSupply(contractAddress: string) {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const res = contract.methods.totalSupply().call();
  return res;
}

export async function getDecimal(contractAddress: string): Promise<string> {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const res = await contract.methods.decimals().call();
  return res;
}

export async function getBalanceOf(contractAddress: string, address: string) {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const decimal = await getDecimal(contractAddress);
  const res = await contract.methods.balanceOf(address).call();
  if (decimal && res) {
    return BigNumber(res).div(BigNumber(10).pow(decimal)).toString();
  }
  return res;
}

export async function getAllowence(
  contractAddress: string,
  ownerAddress: string,
  spenderAddress: string
) {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const decimal = await getDecimal(contractAddress);
  try {
    const res = await contract.methods
      .allowance(ownerAddress, spenderAddress)
      .call(); // amount of allowence
    if (res == 0) {
      return false;
    }
    console.log({ res, decimal });
    if (res && decimal) {
      const decimalAmount = BigNumber(res).div(BigNumber(10).pow(decimal));
      return decimalAmount.toFixed(0);
    }
    return false;
  } catch (err) {
    console.error("Get Allowence Error: ", err);
    return false;
  }
}
