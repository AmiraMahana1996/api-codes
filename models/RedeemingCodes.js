const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "RedeemingCodes",
    {
      sn: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      codes: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      EquivellantID: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      Redeemed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      sent: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "RedeemingCodes",
      schema: "dbo",
      timestamps: false,
      indexes: [
        {
          name: "PK_RedeemingCodes",
          unique: true,
          fields: [{ name: "sn" }],
        },
      ],
    }
  );
};
