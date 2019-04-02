DROP DATABASE IF EXISTS cookie_db;
CREATE DATABASE cookie_db;

USE cookie_db;


CREATE TABLE SUM (
id INTEGER(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(256) NOT NULL,
phone VARCHAR(12) NOT NULL,
city VARCHAR(50) NOT NULL
);

CREATE TABLE TCM (
id INTEGER(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
sum_ID INTEGER(10) NOT NULL,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(256) NOT NULL,
phone VARCHAR(12) NOT NULL,
city VARCHAR(50) NOT NULL,
smores VARCHAR(50) NOT NULL,
thin_mint VARCHAR(50) NOT NULL,
shortbread VARCHAR(50) NOT NULL,
peanut_butter_sandwhich VARCHAR(50) NOT NULL,
lemonades VARCHAR(50) NOT NULL,
thanks_a_lot VARCHAR(50) NOT NULL,
samoas VARCHAR(50) NOT NULL,
caramel_chocolate_chip VARCHAR(50) NOT NULL,
peanut_butter_patties VARCHAR(50) NOT NULL
);

CREATE TABLE Trade (
id INTEGER(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
tcmID_giver INTEGER(10) NOT NULL,
tcmID_taker  INTEGER(10),
cookie_type VARCHAR(30),
cookie_amount INTEGER(10)
);


INSERT INTO SUM (name, email, password, phone, city) values ('Jane Austen', 'JA@gmail.com', 'password1', '763-555-5555', 'Maple Grove');
INSERT INTO SUM (name, email, password, phone, city) values ('Abigal Clark', 'AC@gmail.com', 'password2', '763-444-4444', 'Plymouth');
INSERT INTO SUM (name, email, password, phone, city) values ('Cersei Lannister', 'CL@gmail.com', 'password3', '763-222-2222', 'Edina');

INSERT INTO TCM (sum_ID, name, email, password, phone, city, smores, thin_mint, shortbread, peanut_butter_sandwhich, lemonades, thanks_a_lot, samoas, caramel_chocolate_chip, peanut_butter_patties) values ('1', 'Regina Falangee', 'RF@gmail.com', 'password4', '612-333-3333', 'Rogers', '5', '5', '5', '5', '5', '5', '5', '5', '5');
INSERT INTO TCM (sum_ID, name, email, password, phone, city, smores, thin_mint, shortbread, peanut_butter_sandwhich, lemonades, thanks_a_lot, samoas, caramel_chocolate_chip, peanut_butter_patties) values ('1', 'Carrie Bradshaw', 'CB@gmail.com', 'password5', '612-444-4444', 'Maple Grove', '5', '5', '5', '5', '5', '5', '5', '5', '5');
INSERT INTO TCM (sum_ID, name, email, password, phone, city, smores, thin_mint, shortbread, peanut_butter_sandwhich, lemonades, thanks_a_lot, samoas, caramel_chocolate_chip, peanut_butter_patties) values ('2', 'Ida Moon', 'IM@gmail.com', 'password6', '612-666-6666', 'St Louis Park', '5', '5', '5', '5', '5', '5', '5', '5', '5');
INSERT INTO TCM (sum_ID, name, email, password, phone, city, smores, thin_mint, shortbread, peanut_butter_sandwhich, lemonades, thanks_a_lot, samoas, caramel_chocolate_chip, peanut_butter_patties) values ('2', 'Arya Stark', 'AS@gmail.com', 'password7', '612-999-9999', 'Plymouth', '5', '5', '5', '5', '5', '5', '5', '5', '5');
INSERT INTO TCM (sum_ID, name, email, password, phone, city, smores, thin_mint, shortbread, peanut_butter_sandwhich, lemonades, thanks_a_lot, samoas, caramel_chocolate_chip, peanut_butter_patties) values ('3', 'Leslie Knope', 'LK@gmail.com', 'password8', '612-777-7777', 'Bloomington', '5', '5', '5', '5', '5', '5', '5', '5', '5');
INSERT INTO TCM (sum_ID, name, email, password, phone, city, smores, thin_mint, shortbread, peanut_butter_sandwhich, lemonades, thanks_a_lot, samoas, caramel_chocolate_chip, peanut_butter_patties) values ('3', 'April Ludgate', 'AL@gmail.com', 'password9', '612-111-1111', 'Edina', '5', '5', '5', '5', '5', '5', '5', '5', '5');

INSERT INTO Trade (tcmID_giver, tcmID_taker, cookie_type, cookie_amount) values ('2', '3', 'smores', '3');
INSERT INTO Trade (tcmID_giver, tcmID_taker, cookie_type, cookie_amount) values ('6', '5', 'peanut_butter_patties', '5');
