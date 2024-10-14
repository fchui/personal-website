const dotenv = require('dotenv').config()
const Pool = require('pg').Pool
const fs = require('fs')

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: fs.readFileSync(process.env.POSTGRES_PASSWORD_FILE, 'utf8'),
  port: process.env.POSTGRES_PORT,
});
//get all projects from our database
const getProjects = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM projects", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

module.exports = {
  getProjects
};