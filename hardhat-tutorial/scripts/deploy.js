const {ethers}  = require("hardhat");
const {CRYPTO_DEVS_NFT_CONTRACT_ADDRESS} = require("../constants");

async function main(){

 const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

 const cryptoDevsTokenContract = await ethers.getContractFactory("CryptoDevToken");

 const deployCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(cryptoDevsNFTContract);

 console.log("CryptoDev Token Contract Address:", deployCryptoDevsTokenContract.address);
 

}



main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});