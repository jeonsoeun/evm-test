import Web3 from "web3";
import { config } from "../config";
import ABI from "../config/erc20Api.json";

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

export async function getDecimal(contractAddress: string) {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const res = contract.methods.decimals().call();
  return res;
}

export async function getBalanceOf(contractAddress: string, address: string) {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const res = contract.methods.balanceOf(address).call();
  return res;
}
