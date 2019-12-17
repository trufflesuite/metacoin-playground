const ConvertLib = artifacts.require("ConvertLib");
const MetaCoinLargeBalance = artifacts.require("MetaCoinLargeBalance");

module.exports = function(deployer) {
  deployer.link(ConvertLib, MetaCoinLargeBalance);
  deployer.deploy(MetaCoinLargeBalance);
};
