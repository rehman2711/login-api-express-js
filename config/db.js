// 1
// Creating Database connection
const mysql = require("mysql2/promise");
require("dotenv").config();

// Creating Pool
// Establishing configuration

// used https://www.freesqldatabase.com/account/ for remote-DB
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Checking the connection Established
(async () => {
  try {
    console.log(process.env.DB_HOST);
    console.log(process.env.DB_USERNAME);
    console.log(process.env.DB_PASSWORD);
    console.log(process.env.DB_DATABASE);
    const connection = await pool.getConnection();
    console.log("Database Connected");
    connection.release();
  } catch (error) {
    console.log(`Error Occured ${error}`);
  }
})();

// Exporting to use in main entry point file
module.exports = pool;
