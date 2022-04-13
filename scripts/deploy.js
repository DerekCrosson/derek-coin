const { ethers } = require("hardhat");

async function main() {
  const derekCoinContract = await ethers.getContractFactory("DerekCoinToken");

  const deployedDerekCoinContract = await derekCoinContract.deploy();
  await deployedDerekCoinContract.deployed();

  // Just put this here so I know what the address is once it's deployed
  console.log("DerekCoin Token Contract Address:", deployedDerekCoinContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
