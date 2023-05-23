module.exports = (app) => {
  const RedeemingCodes = require("../controllers/RedeemingCodes");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", RedeemingCodes.findAll);

  app.use("/api/RedeemingCodes", router);
};
