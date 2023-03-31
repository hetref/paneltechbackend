const express = require("express");
const {
  addClients,
  addquotation,
  getquotationofuser,
  getquotation,
} = require("./database");

const app = express();

app.use(express.json());

// Add Clients

app.post("/add-client", async (req, res) => {
  const {
    company_name,
    address_line1,
    address_line2,
    address_line3,
    phone_no,
    kind_attn,
    email,
    fax_no,
  } = req.body;
  const client = await addClients(
    company_name,
    address_line1,
    address_line2,
    address_line3,
    phone_no,
    kind_attn,
    email,
    fax_no
  );
  res.status(201).send(client);
});

app.get("/get-client", async (req, res) => {
  const {
    company_name,
    address_line1,
    address_line2,
    address_line3,
    phone_no,
    kind_attn,
    email,
    fax_no,
  } = req.body;
  const client = await addClients(
    company_name,
    address_line1,
    address_line2,
    address_line3,
    phone_no,
    kind_attn,
    email,
    fax_no
  );
  res.status(201).send(client);
});

// Manage Clients

app.post("/add-quotation", async (req, res) => {
  const {
    customer_enquiry_no,
    enquiry_date,
    contact_person,
    contact_person_phone,
    contact_person_email,
    client_id,
    revised_no,
  } = req.body;
  const quotation = await addquotation(
    customer_enquiry_no,
    enquiry_date,
    contact_person,
    contact_person_phone,
    contact_person_email,
    client_id,
    revised_no
  );
  res.status(201).send(quotation);
});

app.get("/get-quotation-user", async (req, res) => {
  const { client_id } = req.body;
  const quotationofuser = await getquotationofuser(client_id);
  res.status(201).send(quotationofuser);
});

app.get("/get-quotation", async (req, res) => {
  const { client_id, revised_no } = req.body;
  const quotation = await getquotation(client_id, revised_no);
  res.status(201).send(quotation);
});

app.listen(8000, (req, res) => {
  console.log("Listening on port 8000");
});
