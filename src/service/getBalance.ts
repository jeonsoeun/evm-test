import Web3 from "web3";
import { config } from "../config";

export function getBalance(address: string) {
  const providers = new Web3.providers.HttpProvider(config.httpProvider);
  const web3 = new Web3(providers);
  return web3.eth.getBalance(address);
}
