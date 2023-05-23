const db = require("../models/index");
const RedeemingCodes = db.RedeemingCodes;

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  RedeemingCodes.findAll({ limit: 5 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
