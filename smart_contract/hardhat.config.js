require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/eqoOMaCwsNRFa3uvOF4REMAt4TREYw7F",
      // Note: This is just for the demo purpose in a test net. Never share your private key.
      // use dotenv (npm install dotenv --save)
      accounts: [
        "845a7214baa35f4fb479a43922d2af4890b9a2d14c1334530c152b45f0d70875",
      ],
    },
  },
};
