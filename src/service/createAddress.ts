import Web3 from "web3";

export function createAddress(entropy?: string) {
  // const web3 = new Web3(Web3.givenProvider || "https://rpc.sepolia.dev");
  const web3 = new Web3("https://rpc.sepolia.dev");
  return web3.eth.accounts.create(entropy);
}
