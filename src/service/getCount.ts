import Web3 from "web3";
import { config } from "../config";
import ABI from "../config/abi.json";

export async function getCount(contractAddress: string): Promise<string> {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const respond = contract.methods.count().call();
  return respond;
}
