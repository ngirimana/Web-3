// https://eth-ropsten.alchemyapi.io/v2/xSXv1TOuxC5DjR2uMaVyjqYSwMqBSNTT

require('@nomiclabs/hardhat-waffle')
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/xSXv1TOuxC5DjR2uMaVyjqYSwMqBSNTT",
      accounts: [
        "2a64276e8d1739dcde972788d53988f8766d338f19c5590f48b0ce86cde53486",
      ],
    },
  },
};