const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

// const addClients = async (company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no) => {
//     const [result] = await pool.query("INSERT INTO add_clients (company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?);", [company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no])
//     return result;
// }

const addClients = async (
  company_name,
  address_line1,
  address_line2,
  address_line3,
  phone_no,
  kind_attn,
  email,
  fax_no
) => {
  const [result] = await pool.query(
    `
          INSERT INTO add_clients (company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
    [
      company_name,
      address_line1,
      address_line2,
      address_line3,
      phone_no,
      kind_attn,
      email,
      fax_no,
    ]
  );

  return result;
};

const getClients = async () => {
  const [result] = await pool.query(
    `
          SELECT * FROM add_clients
      `
  );

  return result;
};

const getClient = async (id) => {
  const [result] = await pool.query(
    `
          SELECT * FROM add_clients WHERE id=${id}
      `
  );

  return result;
};

const addquotation = async (
  company_name,
  address_line1,
  address_line2,
  address_line3,
  phone_no,
  kind_attn,
  email,
  fax_no
) => {
  const [result] = await pool.query(
    `
          INSERT INTO quotation (customer_enquiry_no, enquiry_date, contact_person, contact_person_phone, contact_person_email, client_id, revised_no) VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
    [
      company_name,
      address_line1,
      address_line2,
      address_line3,
      phone_no,
      kind_attn,
      email,
      fax_no,
    ]
  );

  return result;
};

const getquotationofuser = async (client_id) => {
  const [result] = await pool.query(
    `
          SELECT * FROM quotation WHERE client_id=${client_id}
      `
  );

  return result;
};

const getquotation = async (client_id, revised_no) => {
  const [result] = await pool.query(
    `
          SELECT * FROM quotation WHERE client_id=${client_id} AND revised_no=${revised_no}
      `
  );

  return result;
};

const additem = async (
  model_no,
  hsn_code,
  quantity,
  unit_price,
  item_description,
  client_id,
  quotation_id,
  revised_no,
  revised_no_quotation
) => {
  const [result] = await pool.query(
    `
          INSERT INTO items (model_no, hsn_code, quantity, unit_price, item_description, client_id, quotation_id, revised_no, revised_no_quotation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
    [
      model_no,
      hsn_code,
      quantity,
      unit_price,
      item_description,
      client_id,
      quotation_id,
      revised_no,
      revised_no_quotation,
    ]
  );

  return result;
};

const getitem = async (client_id) => {
  const [result] = await pool.query(
    `
      SELECT * FROM items WHERE client_id=${client_id}
    `
  );

  return result;
};

const getitemwithquotation = async (client_id, quotation_id) => {
  const [result] = await pool.query(
    `
          SELECT * FROM items WHERE client_id=${client_id} AND quotation_id=${quotation_id}
      `
  );

  return result;
};

const addnote = async (
  note_description,
  client_id,
  quotation_id,
  revised_no,
  revised_no_quotation
) => {
  const [result] = await pool.query(
    `
          INSERT INTO notes (note_description, client_id, quotation_id, revised_no, revised_no_quotation) VALUES (?, ?, ?, ?, ?)
      `,
    [
      note_description,
      client_id,
      quotation_id,
      revised_no,
      revised_no_quotation,
    ]
  );

  return result;
};

const getnote = async (client_id) => {
  const [result] = await pool.query(
    `
      SELECT * FROM notes WHERE client_id=${client_id}
    `
  );

  return result;
};

const getnotewithquotation = async (client_id, quotation_id) => {
  const [result] = await pool.query(
    `
          SELECT * FROM notes WHERE client_id=${client_id} AND quotation_id=${quotation_id}
      `
  );

  return result;
};

const getnotewithquotationandrevised = async (
  client_id,
  quotation_id,
  revised_no_quotation
) => {
  const [result] = await pool.query(
    `
          SELECT * FROM notes WHERE client_id=${client_id} AND quotation_id=${quotation_id} AND revised_no_quotation=${revised_no_quotation}
      `
  );

  return result;
};

const addterm = async (
  price,
  delivery,
  p_and_f,
  feight,
  transit_insurance,
  gst,
  payment_terms,
  validity,
  penalty_clause,
  warrenty,
  cancellation_charges,
  commission_supervision,
  forex,
  client_id,
  quotation_id,
  revised_no,
  revised_no_quotation
) => {
  const [result] = await pool.query(
    `
          INSERT INTO terms_conditions (price, delivery, p_and_f, feight, transit_insurance, gst, payment_terms, validity, penalty_clause, warrenty, cancellation_charges, commission_supervision, forex, client_id, quotation_id, revised_no, revised_no_quotation) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
    [
      price,
      delivery,
      p_and_f,
      feight,
      transit_insurance,
      gst,
      payment_terms,
      validity,
      penalty_clause,
      warrenty,
      cancellation_charges,
      commission_supervision,
      forex,
      client_id,
      quotation_id,
      revised_no,
      revised_no_quotation,
    ]
  );

  return result;
};

const getterm = async (client_id) => {
  const [result] = await pool.query(
    `
      SELECT * FROM terms_conditions WHERE client_id=${client_id}
    `
  );

  return result;
};

const gettermwithquotation = async (client_id, quotation_id) => {
  const [result] = await pool.query(
    `
          SELECT * FROM terms_conditions WHERE client_id=${client_id} AND quotation_id=${quotation_id}
      `
  );

  return result;
};

const gettermwithquotationandrevised = async (
  client_id,
  quotation_id,
  revised_no_quotation
) => {
  const [result] = await pool.query(
    `
          SELECT * FROM terms_conditions WHERE client_id=${client_id} AND quotation_id=${quotation_id} AND revised_no_quotation=${revised_no_quotation}
      `
  );

  return result;
};

module.exports = {
  addClients,
  getClients,
  getClient,
  addquotation,
  getquotation,
  getquotationofuser,
  getitem,
  getitemwithquotation,
  additem,
  getitem,
  getitemwithquotation,
  addnote,
  getnote,
  getnotewithquotation,
  getnotewithquotationandrevised,
  addterm,
  getterm,
  gettermwithquotation,
  gettermwithquotationandrevised,
};
