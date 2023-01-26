import Web3 from "web3";
import { config, personalAddress, PRIVATE_KEY } from "../config";
import ABI from "../config/counter2ABI.json";
import { getGasPrice } from "./getGasPrice";

export async function getCount(contractAddress: string): Promise<string> {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  // ABI 타입 어떻게 하나.
  const contract = new web3.eth.Contract(abi, contractAddress);
  const respond = contract.methods.count().call();
  return respond;
}

export async function addCount(contractAddress: string): Promise<boolean> {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  // ABI 타입 어떻게 하나.
  const contract = new web3.eth.Contract(abi, contractAddress);
  const gasPrice = (await getGasPrice()).fast * 10 ** 9;
  try {
    const gasLimit = contract.methods.add().estimateGas();
    const data = contract.methods.add().encodeABI();
    // 내가 한 방법은 결국 eth 전송한거랑 거의 똑같은 포멧인데?? -> 맞다
    const obj = {
      contractAddress, // 이걸 추가하니까 되네..? to에 넣는게 아니였음?
      to: contractAddress, // 여기에 contract주소를 넣는게 맞나?-> 맞다. 26.01.23
      gasPrice: web3.utils.toHex(gasPrice),
      gas: web3.utils.toHex(gasLimit), //gas limit
      data,
    };
    const signed = await web3.eth.accounts.signTransaction(obj, PRIVATE_KEY);
    // 질문 contract.methods.add().send({from: ~~}) 이건 뭐임..? https://web3js.readthedocs.io/en/v1.8.1/web3-eth-contract.html#methods-mymethod-send
    // const result = await contract.methods
    //   .add()
    //   .send({ from: personalAddress.my });
    if (signed?.rawTransaction) {
      const result = await web3.eth.sendSignedTransaction(
        signed.rawTransaction
      );
      return !!result.transactionHash;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function minusCount(contractAddress: string): Promise<boolean> {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  // ABI 타입 어떻게 하나.
  const contract = new web3.eth.Contract(abi, contractAddress);
  const gasPrice = (await getGasPrice()).fast * 10 ** 9;
  try {
    const gasLimit = contract.methods.minus().estimateGas();
    const data = contract.methods.minus().encodeABI();
    const obj = {
      contractAddress,
      to: contractAddress,
      gasPrice: web3.utils.toHex(gasPrice),
      gas: web3.utils.toHex(gasLimit), //gas limit
      data,
    };
    const signed = await web3.eth.accounts.signTransaction(obj, PRIVATE_KEY);
    if (signed?.rawTransaction) {
      const result = await web3.eth.sendSignedTransaction(
        signed.rawTransaction
      );
      return !!result.transactionHash;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function resetCount(contractAddress: string): Promise<boolean> {
  const web3 = new Web3(config.httpProvider);
  const abi: any = ABI;
  // ABI 타입 어떻게 하나.
  const contract = new web3.eth.Contract(abi, contractAddress);
  const gasPrice = (await getGasPrice()).fast * 10 ** 9;
  try {
    const gasLimit = contract.methods.reset().estimateGas();
    const data = contract.methods.reset().encodeABI();
    const obj = {
      contractAddress,
      to: contractAddress,
      gasPrice: web3.utils.toHex(gasPrice),
      gas: web3.utils.toHex(gasLimit), //gas limit
      data,
    };
    const signed = await web3.eth.accounts.signTransaction(obj, PRIVATE_KEY);
    if (signed?.rawTransaction) {
      const result = await web3.eth.sendSignedTransaction(
        signed.rawTransaction
      );
      return !!result.transactionHash;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}
