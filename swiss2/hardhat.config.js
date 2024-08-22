require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "91f62e341bca8dd72705cf553d57b241bac83ef8697ceb3cd3adc2f4ac188f22";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
