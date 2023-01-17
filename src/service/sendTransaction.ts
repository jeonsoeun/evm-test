import Web3 from "web3";
import { config } from "../config";
import { getGasPrice } from "./getGasPrice";

export async function sendTransaction(
  toAddress: string,
  amount: string,
  callback: (txHash: string) => void
) {
  const web3 = new Web3(config.httpProvider);
  const gasPrice = await getGasPrice();
  // value, gasPrice, gasLimit 다 hex값으로 변경해야함.
  const txObj = {
    // from: personalAddress.my,
    to: toAddress,
    value: web3.utils.toWei(amount),
    gasPrice: web3.utils.toHex(`${gasPrice.fast * 10 ** 9}`), // optional
    gasLimit: web3.utils.toHex("21000"), // optional
  };

  const signed = await web3.eth.accounts.signTransaction(
    txObj,
    "0x2344e0ba06710e740af29d11190edbc832b3bc55ee0d51a467539b0a01cfcb45"
  );
  //web3.eth.account.signTransaction() 으로 사인하면 private key써서 바로 사인 가능.
  // web3.eth.signTransaction() 은 지갑 붙었을때 떄 지갑으로 사인하는거.
  if (signed.rawTransaction) {
    web3.eth
      .sendSignedTransaction(signed.rawTransaction)
      .on("transactionHash", callback);
    // web3.eth.sendTransaction(txObj).on("transactionHash", callback); // 외부 월렛
  } else {
    throw Error("사인 실패.");
  }
}
