# Derek Coin

Cadena Project 1: Creating a dApp. This is the meme coin part of the project. It has contract to create a ERC20 token called DerekCoin, a test for the contract, a script that deploys the contract, and an example of a task implementation, which simply lists the available accounts.

Contract address: https://rinkeby.etherscan.io/address/0xDf06BA0260aC88881de923194835f05707f2E8e8

Try running some of the following tasks:

List accounts
```shell
npx hardhat accounts
```

Compile the project
```shell
npx hardhat compile
```

Clear cache and delete artifacts
```shell
npx hardhat clean
```

Deploy the contract to the Rinkeby Testnet
```shell
npx hardhat run scripts/deploy.js --network rinkeby
```

Run tests
```shell
npx hardhat test
```
