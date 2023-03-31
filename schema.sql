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
)