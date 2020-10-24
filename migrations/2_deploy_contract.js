const DavidToken = artifacts.require("./DavidToken.sol");

module.exports = function (deployer) {
  deployer.deploy(DavidToken);
};
