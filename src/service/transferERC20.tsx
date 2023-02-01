import BigNumber from "bignumber.js";
import Web3 from "web3";
import { config, personalAddress, PRIVATE_KEY } from "../config";
import ABI from "../config/erc20Api.json";
import { getDecimal } from "./getErc20Data";
import { getGasPrice } from "./getGasPrice";

export async function transferToken(
  contractAddress: string,
  address: string,
  amount: string
) {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const gasPrice = (await getGasPrice()).fast * 10 ** 9;
  let gasLimit;
  const decimal = await getDecimal(contractAddress);
  const amountBN = BigNumber(amount).times(BigNumber(10).pow(decimal));
  const amountHex = web3.utils.toHex(amountBN.toString());
  // console.log(amountBN.toString());
  try {
    gasLimit = await contract.methods
      .transfer(address, amountBN.toFixed(0, BigNumber.ROUND_DOWN))
      .estimateGas({ from: personalAddress.my }, (error: any) => {
        console.error("EstimateError: ", error);
      });
  } catch (err) {
    console.error("Error");
    return false;
  }
  // return false;
  try {
    const data = contract.methods.transfer(address, amountHex).encodeABI();
    const obj = {
      contractAddress,
      to: contractAddress,
      gasPrice: web3.utils.toHex(gasPrice),
      gas: web3.utils.toHex(BigNumber(gasLimit).times(1.5).toFixed(0)), //gas limit
      data,
    };
    // console.log(obj, amountHex);
    const signed = await web3.eth.accounts.signTransaction(obj, PRIVATE_KEY);
    if (signed?.rawTransaction) {
      const result = await web3.eth.sendSignedTransaction(
        signed.rawTransaction
      );
      return !!result.transactionHash;
    } else {
      console.error("sined.rawTransaction is falsy. singed: ", signed);
      return false;
    }
  } catch (err) {
    console.error("SignTranscation: ", err);
    return false;
  }
}
