CREATE TABLE items(
 id SERIAL PRIMARY KEY,
 item_name VARCHAR (45) NOT NULL,
 price FLOAT NOT NULL
)

CREATE TABLE customers(
 customers_id SERIAL PRIMARY KEY,
 first_name VARCHAR (20) NOT NULL,
 last_name VARCHAR (25) NOT NULL
)

--Add the following items to the items table:

INSERT INTO items (item_name, price)
VALUES('Small Desk','100');

INSERT INTO items (item_name, price)
VALUES('Large desk','300');

INSERT INTO items (item_name, price)
VALUES('Fan','80');

--Add 5 new customers to the customers table:

INSERT INTO customers (first_name, last_name)
VALUES('Greg','Jones');

INSERT INTO customers (first_name, last_name)
VALUES('Sandra','Jones');

INSERT INTO customers (first_name, last_name)
VALUES('Scott','Scott');

INSERT INTO customers (first_name, last_name)
VALUES('Trevor','Green');

INSERT INTO customers (first_name, last_name)
VALUES('Melanie','Johnson');

--Use SQL to fetch the following data from the database:

--All the items.
 SELECT * FROM items;
 SELECT * FROM customers;

-- All the items with a price above 80 (80 not included).

SELECT * FROM items WHERE price > 80;

--All the items with a price below 300. (300 included)

SELECT * FROM items WHERE price <= 300;

--All customers whose last name is ‘Smith’ (What will be your outcome? - empty table).

SELECT * FROM customers WHERE last_name = 'Smith';

--All customers whose last name is ‘Jones’.
SELECT * FROM customers WHERE last_name = 'Jones';

--All customers whose firstname is not ‘Scott’.
SELECT * FROM customers WHERE first_name != 'Scott';







