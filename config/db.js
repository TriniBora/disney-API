const { Sequelize } = require("sequelize");

const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USERNAME || "root";
const password = process.env.DATABASE_PASSWORD || "";
const host = process.env.DATABASE_HOST || "localhost";
const port = process.env.DATABASE_PORT || 3306;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: "mysql" /*one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'*/,
});

module.exports = sequelize;
