const express = require('express');
const { addClients } = require('./database');

const app = express();

app.use(express.json())

app.post("/add-client", async (req, res) => {
    const {company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no} = req.body;
    const client = await addClients(company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no);
    res.status(201).send(client);
})


app.listen(8000, (req, res) => {
    console.log("Listening on port 8000")
})