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
    item_id integer NOT NULL,
    client_id integer NOT NULL,
    quotation_id integer NOT NULL,
    revised_no integer NOT NULL,
    revised_no_quotation integer NOT NULL,
    added_at TIMESTAMP NOTNULL DEFAULT NOW()
)

INSERT INTO items 
(model_no, hsn_code, quantity, unit_price, item_description, item_id, client_id, quotation_id, revised_no, revised_no_quotation) 
VALUES ("1092837465", "4e7f7w8efw8yf9f8", "2", "20000", "   This is a description", "12", "1", "1", "0", "1");