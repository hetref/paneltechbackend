const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

// const addClients = async (company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no) => {
//     const [result] = await pool.query("INSERT INTO add_clients (company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?);", [company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no])
//     return result;
// }



const addClients = async (company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no) => {

    const [result] = await pool.query(
      `
          INSERT INTO add_clients (company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no]
    );
  
    return result;
  
  };
  

module.exports = {addClients}