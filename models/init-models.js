var DataTypes = require("sequelize").DataTypes;
var _RedeemingCodes = require("./RedeemingCodes");

function initModels(sequelize) {
  var RedeemingCodes = _RedeemingCodes(sequelize, DataTypes);


  return {
    RedeemingCodes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
