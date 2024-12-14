require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
      accounts: ['YOUR_PRIVATE_KEY'] // Replace with your Ethereum private key
    },
    bitfinity: {
      url: 'https://testnet.bitfinity.network',
      accounts: ['YOUR_PRIVATE_KEY'],
      chainId: 355113,
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
};
