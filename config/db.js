// 1
// Creating Database connection
const mysql = require("mysql2/promise");
const fs = require("fs");
require("dotenv").config();
var path = require("path");

// Creating Pool
// Establishing configuration
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0,
  ssl: {
    ca: fs.readFileSync(
      path.join(process.cwd(), "tidb-database-certificate.pem"),
    ),
  },
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
