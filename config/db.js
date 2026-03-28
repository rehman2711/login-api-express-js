// 1
// Creating Database connection
const mysql = require("mysql2/promise");
const fs = require("fs");
require("dotenv").config();

// Creating Pool
// Establishing configuration
const pool = mysql.createPool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  ssl: { ca: fs.readFileSync("./tidb-database-certificate.pem") },
});

// Checking the connection Established
(async () => {
  try {
    console.log(process.env.USERNAME);
    const connection = await pool.getConnection();
    console.log("Database Connected");
    connection.release();
  } catch (error) {
    console.log(`Error Occured ${error}`);
  }
})();

// Exporting to use in main entry point file
module.exports = pool;
