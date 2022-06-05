import { getStarknet } from "get-starknet"


export const walletProvider = async () => {
  const starknet = getStarknet()
  var result = []
  if (!starknet) {
    throw Error("User rejected wallet selection or silent connect found nothing")
  }
  await starknet.enable()
  if (starknet.isConnected) {
    return starknet
  } else {
    return result
  }
  
}
