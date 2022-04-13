const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DerekCoin", function () {

  let derekCoinToken;
  let owner;
  let address1;
  let address2;

  beforeEach(async function() {
    const DerekCoinToken = await hre.ethers.getContractFactory("DerekCoinToken");
    derekCoinToken = await DerekCoinToken.deploy();
    await derekCoinToken.deployed();

    [owner, address1, address2] = await ethers.getSigners();

  });
  
  it("Should should successfully deploy", async function () {
    console.log("success!");
  });

  it("Should deploy with 10 tokens for the owner of the contract", async function() {
    const balance = await derekCoinToken.balanceOf(owner.address);
    expect(ethers.utils.formatEther(balance) == 10);
  });

  it("Should let you send tokens to another address", async function() {
    await derekCoinToken.transfer(address1.address, ethers.utils.parseEther("100"));
    expect(await derekCoinToken.balanceOf(address1.address)).to.equal(ethers.utils.parseEther("100"));
  });

  it("Should let you give another address the approval to send on your behalf", async function() {
    await derekCoinToken.connect(address1).approve(owner.address, ethers.utils.parseEther("1000"));
    await derekCoinToken.transfer(address1.address, ethers.utils.parseEther("1000"));
    await derekCoinToken.transferFrom(address1.address, address2.address, ethers.utils.parseEther("1000"));
    expect(await derekCoinToken.balanceOf(address2.address)).to.equal(ethers.utils.parseEther("1000"));
  })
});
