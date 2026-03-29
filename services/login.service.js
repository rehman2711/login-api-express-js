// 2
// Business Logic
// Function of working
// Used parameter function for use in another file
const connection = require("../config/db");

const findUserByUsername = async (username) => {
  const query = `SELECT * FROM users WHERE username = ?`;
  const [rows] = await connection.execute(query, [username]);
  return rows[0]; // return single user
};

module.exports = {
  findUserByUsername,
};