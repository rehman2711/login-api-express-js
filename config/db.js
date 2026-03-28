// 1
// Creating Database connection
const mysql = require("mysql2/promise");
const fs = require("fs");
require("dotenv").config();

// Creating Pool
// Establishing configuration
const pool = mysql.createPool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  ssl: { ca: fs.readFileSync("./ca.pem") },
});

// Checking the connection Established
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Database Connected");
    connection.release();
  } catch (error) {
    console.log(`Error Occured ${error}`);
  }
})();

// Exporting to use in main entry point file
module.exports = pool;
