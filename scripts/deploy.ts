import { expect } from "chai";
import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Voting");
    const token = await Token.deploy()
    console.log("Token Address-> ", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log('Deply error-> ', error); process.exit(1);
    });