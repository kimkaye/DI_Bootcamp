CREATE TABLE items(
 items_id SERIAL PRIMARY KEY,
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

--Use SQL to get the following from the database:
--All items, ordered by price (lowest to highest).
SELECT * FROM items
ORDER BY price;

--Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items WHERE price >= 80 ORDER BY price;

--The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
SELECT last_name, first_name FROM customers
ORDER BY first_name;

--All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers
ORDER BY last_name DESC;

--Create a table named purchases.
-- It should have 2 columns : customer_id and item_id.
--These columns are references from the tables customers and items.
--Edit the data of the purchases table:


CREATE TABLE purchases(
 	purchases_id SERIAL PRIMARY KEY,
 	customer_id INTEGER REFERENCES customers (customers_id),
	item_id INTEGER REFERENCES items (items_id)
 );

 INSERT INTO purchases (customer_id, item_id)
 VALUES (1);

-- it is not possible because ERROR:  INSERT has more target columns than expressions

--Add 5 rows which reference existing customers and items.


INSERT INTO purchases (
    customer_id,
    item_id
)
VALUES
    (
        1,
        1
    ),
   (
        2,
        2
    ),
   (
        3,
        3
    ),
	  (
        4,
        1
    ),
  (
        5,
        2
    );

--    Use SQL to get the following from the database:
--All purchases. Is this information useful to us?
 SELECT * FROM purchases;

-- no! because it is just numbers (id)

--All purchases, joining with the customers table.

SELECT *
FROM purchases
INNER JOIN customers
ON customer_id = customers_id;

--Purchases of the customer with the ID equal to 4.
SELECT *
FROM purchases
INNER JOIN customers
ON customer_id = customers_id
WHERE customers_id = 4;

--Purchases for a large desk AND a small desk
SELECT *
FROM purchases
INNER JOIN items
ON item_id = items_id
WHERE item_id = 1 OR item_id = 2;

--Create a purchase for Scott Scott – he bought a hard drive.

INSERT INTO items (item_name, price)
VALUES('hard drive','200');

INSERT INTO purchases (customer_id, item_id)
VALUES('3','4');

--Use SQL to show all the customers who have made a purchase. Show the following fields/columns:


SELECT customers.first_name, customers.last_name, items.item_name
FROM ((purchases
INNER JOIN customers ON customer_id = customers_id)
INNER JOIN items ON item_id = items_id);

--Exercise 2 : Dvdrental Database


