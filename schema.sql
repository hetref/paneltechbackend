CREATE DATABASE oas;

USE oas;

CREATE TABLE add_clients (
    id integer PRIMARY KEY AUTO_INCREMENT,
    company_name TEXT NOT NULL,
    address_line1 TEXT NOT NULL,
    address_line2 TEXT NOT NULL,
    address_line3 TEXT NOT NULL,
    phone_no VARCHAR(20) NOT NULL,
    kind_attn TEXT NOT NULL,
    email TEXT NOT NULL,
    fax_no TEXT NOT NULL
);

INSERT INTO add_clients (company_name, address_line1, address_line2, address_line3, phone_no, kind_attn, email, fax_no) VALUES ('sdf', 'asgf', 'asdfgsf', 'asdfasgsdfg', '5456545654', 'Aryan Shinde', 'shindearyan179@gmail.com', '34crrweg34');

CREATE TABLE quotation (
    id integer PRIMARY KEY AUTO_INCREMENT,
    customer_enquiry_no integer NOT NULL,
    enquiry_date TIMESTAMP NOT NULL DEFAULT NOW(),
    contact_person TEXT NOT NULL,
    contact_person_phone VARCHAR(50) NOT NULL,
    contact_person_email TEXT NOT NULL,
    client_id integer NOT NULL,
    revised_no integer NOT  NULL
);

INSERT INTO quotation 
(customer_enquiry_no, enquiry_date, contact_person, contact_person_phone, contact_person_email, client_id, revised_no)
VALUES ("121", NOW(), "Aryan Shinde", "8097296453", "shindearyan179@gmail.com", "1", "0");

CREATE TABLE items (
    id integer PRIMARY KEY AUTO_INCREMENT,
    model_no integer NOT NULL,
    hsn_code TEXT NOT NULL,
    quantity integer NOT NULL,
    unit_price integer NOT NULL,
    item_description TEXT NOT NULL,
    client_id integer NOT NULL,
    quotation_id integer NOT NULL,
    revised_no integer NOT NULL,
    revised_no_quotation integer NOT NULL,
    added_at TIMESTAMP NOT NULL DEFAULT NOW()
)

INSERT INTO items 
(model_no, hsn_code, quantity, unit_price, item_description, client_id, quotation_id, revised_no, revised_no_quotation) 
VALUES ("1092837465", "4e7f7w8efw8yf9f8", "2", "20000", "This is a description", "1", "1", "0", "1");

DELETE FROM items WHERE id=7;

CREATE TABLE notes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    note_description TEXT NOT NULL,
    client_id integer NOT NULL,
    quotation_id integer NOT NULL,
    revised_no integer NOT NULL,
    revised_no_quotation integer NOT NULL
);

INSERT INTO notes (note_description, client_id, quotation_id, revised_no, revised_no_quotation)
VALUES ("This is a note description", "1", "1", "0", "1");

CREATE TABLE terms_conditions (
    id integer PRIMARY KEY AUTO_INCREMENT,
    price TEXT NOT NULL,
    delivery TEXT NOT NULL,
    p_and_f TEXT NOT NULL,
    feight TEXT NOT NULL,
    transit_insurance TEXT NOT NULL,
    gst TEXT NOT NULL,
    payment_terms TEXT NOT NULL,
    validity TIMESTAMP DEFAULT NOW(),
    penalty_clause TEXT NOT NULL,
    warrenty TEXT NOT NULL,
    cancellation_charges TEXT NOT NULL,
    commission_supervision TEXT NOT NULL,
    forex TEXT NOT NULL,
    client_id integer NOT NULL,
    quotation_id integer NOT NULL,
    revised_no integer NOT NULL,
    revised_no_quotation integer NOT NULL
);

INSERT INTO terms_conditions (
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
) VALUES (
    "Ex works Thane",
    "2-3Weeks from date of receipt of Techno commercial clear order/ CODE A approval",
    "Extra",
    "Extra At actual",
    "Extra at actual or Buyer scope",
    "18% extra , Prevailing Duty will be applicable",
    "25% advance along with order & balance 75% against Proforma Invoice",
    NULL, 
    "Not Acceptable",
    "12months from date commissioning or 18 months from date of despatch whichever is earlier. Limited to manufacturing defect or bad workmanship, It does not include any mechanical/ Physical damages due to mishandling at site or wrong installation. Product need to return back to factory for inspection /rectification. Warranty does not include deputation of technician at site for rectification /replacement.",
    "In case of cancellation of PO after 7 days order placement, 25% of po value charges will be applicable. 100% (Standard Products) Cancellation after submission of drawing for approval: 50%, Cancellation after manufacturing clearance: 75%, Cancellation after inspection notice: 100%",
    "Commissioning supervision will be extra, Rs 45000/- per day (first day) there after Rs 15000/- per day - per person.",
    "Foreign Exchange Fluctuation clause, Prices are calculated based on today's exchange rate @1 Euro = Rs 85. Any fluctuation beyond 3%( Positive -Upward increase) will attract revision in price during order confirmation by you",
    1,
    1,
    0,
    1
);