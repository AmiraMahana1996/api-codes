const express = require("express");
const app = express();
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// parse requests of content-type - application/json
app.use(express.json());
require("./routes/RedeemingCodes")(app);
const db = require("./models/index");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// const Sequelize = require("sequelize");

// const sequelize_ = new Sequelize("ElEzabyPortalDB", "sa", "allah_karem!1", {
//   host: "172.1.100.156",
//   dialect: "mssql",
//   port: 1433,
// });

// sequelize_.authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database: ", error);
//   });

// var SequelizeAuto = require("sequelize-auto");
// var auto = new SequelizeAuto("ElEzabyPortalDB", "sa", "allah_karem!1", {
//   host: "172.1.100.156",
//   port: "1433",
//   dialect: "mssql",
//   tables: ["RedeemingCodes"],
// });

// var codes = Sequelize_.import(__dirname + "/models/customers.js");

// Sequelize_.sync({ force: false }).then(() => {
//   /*make sure you use false here. otherwise the total data
//   from the impported models will get deleted and new tables will be created*/
//   // now we cann do all db operations on customers table.
//   //Ex:- lets read all data
//   codes.findAll().then((customers) => {
//     console.log("customers are:-", codes);
//   });
//   console.log("sync is completed");
// });

// var auto = new SequelizeAuto('database', 'user', 'pass', {
//   host: 'localhost',
//   dialect:  mysql, //'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql', but install perticular dialect
//   directory: false, // prevents the program from writing to disk
//   port: 'port',
//   additional: {
//       timestamps: false
//       //...
//   },
//   //tables:['table1', 'table2', 'table3']
//   //...
// })

// auto.run(function (err) {
//   if (err) throw err;

// });

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
