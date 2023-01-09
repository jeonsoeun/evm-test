import Web3 from "web3";

export function getAddressFromPrivateKey(pk: string) {
  const web3 = new Web3("https://rpc.sepolia.dev");
  return web3.eth.accounts.privateKeyToAccount(pk);
}
