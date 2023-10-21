import { ethers } from "ethers";

import VaultABI from "../artifacts/contracts/Vault.sol/Vault.json";

export const VAULT_ADDRESS = "0x6176FF6Ad6Eb210E9164e03b0A620FFEC22d352C";

export const depositVaultInstance = async () => {
  const { ethereum } = window;
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    if (!provider) {
      console.log("Metamask is not installed, please install!");
    }
    const con = new ethers.Contract(VAULT_ADDRESS, VaultABI.abi, signer);
    // console.log(con);
    return con;
  } else {
    console.log("error");
  }
};
