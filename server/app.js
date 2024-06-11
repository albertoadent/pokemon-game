const express = require("express");
const { Sequelize } = require("sequelize");
const port = process.env.PORT || 3000;
const router = require("./routes/router");
const app = express();

// const sequelize = new Sequelize(process.env.DATABASE_URL || "sqlite::memory:", {
//   dialect: "sqlite",
//   storage: "/db/poke.db",
//   logging: console.log,
// });

// sequelize
//   .authenticate()
//   .then(() => console.log("authenticated"))
//   .catch((err) => console.log("error:", err.message));

app.use(express.json());

// sequelize.sync();

app.use(router);

app.listen(port, () => console.log("listening on port", port, "..."));

module.exports = {
  express
};
