// https://eth-ropsten.alchemyapi.io/v2/8oOw_UCx10i9OLEHTgcDgZ6MlVUxUjZo

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8oOw_UCx10i9OLEHTgcDgZ6MlVUxUjZo',
      accounts: ['b63febaf2704fad65f8835e64df7f23df741ab7467b8e832b4170f1230692312']
    }
  }
}