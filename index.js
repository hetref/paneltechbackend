const express = require("express");
const {
  addClients,
  addquotation,
  getquotationofuser,
  getquotation,
  additem,
  getitem,
  getitemwithquotation,
  addnote,
  getnotewithquotationandrevised,
  getnotewithquotation,
  getnote,
  addterm,
  gettermwithquotationandrevised,
  gettermwithquotation,
  getterm,
} = require("./database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

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

// Items

app.post("/add-item", async (req, res) => {
  const {
    model_no,
    hsn_code,
    quantity,
    unit_price,
    item_description,
    item_id,
    client_id,
    quotation_id,
    revised_no,
    revised_no_quotation,
  } = req.body;
  const item = await additem(
    model_no,
    hsn_code,
    quantity,
    unit_price,
    item_description,
    item_id,
    client_id,
    quotation_id,
    revised_no,
    revised_no_quotation
  );
  res.status(201).send(item);
});

app.get("/get-item", async (req, res) => {
  const { client_id } = req.body;
  const quotationofuser = await getitem(client_id);
  res.status(201).send(quotationofuser);
});

app.get("/get-item-quotation", async (req, res) => {
  const { client_id, quotation_id } = req.body;
  const quotation = await getitemwithquotation(client_id, quotation_id);
  res.status(201).send(quotation);
});

// Notes & Deviation

app.post("/add-note", async (req, res) => {
  const {
    note_description,
    client_id,
    quotation_id,
    revised_no,
    revised_no_quotation,
  } = req.body;
  const note = await addnote(
    note_description,
    client_id,
    quotation_id,
    revised_no,
    revised_no_quotation
  );
  res.status(201).send(note);
});

app.get("/get-note", async (req, res) => {
  const { client_id } = req.body;
  const note = await getnote(client_id);
  res.status(201).send(note);
});

app.get("/get-note-quotation", async (req, res) => {
  const { client_id, quotation_id } = req.body;
  const note = await getnotewithquotation(client_id, quotation_id);
  res.status(201).send(note);
});

app.get("/get-note-quotation-revised", async (req, res) => {
  const { client_id, quotation_id, revised_no_quotation } = req.body;
  const note = await getnotewithquotationandrevised(
    client_id,
    quotation_id,
    revised_no_quotation
  );
  res.status(201).send(note);
});

// Terms & Conditions

app.post("/add-term", async (req, res) => {
  const {
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
  } = req.body;
  const term = await addterm(
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
  );
  res.status(201).send(term);
});

app.get("/get-term", async (req, res) => {
  const { client_id } = req.body;
  const term = await getterm(client_id);
  res.status(201).send(term);
});

app.get("/get-term-quotation", async (req, res) => {
  const { client_id, quotation_id } = req.body;
  const term = await gettermwithquotation(client_id, quotation_id);
  res.status(201).send(term);
});

app.get("/get-term-quotation-revised", async (req, res) => {
  const { client_id, quotation_id, revised_no_quotation } = req.body;
  const term = await gettermwithquotationandrevised(
    client_id,
    quotation_id,
    revised_no_quotation
  );
  res.status(201).send(term);
});

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});
