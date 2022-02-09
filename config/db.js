const { Sequelize } = require("sequelize");

const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USERNAME || "root";
const password = process.env.DATABASE_PASSWORD || "";
const host = process.env.DATABASE_HOST || "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql" /*one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'*/,
});

module.exports = sequelize;
