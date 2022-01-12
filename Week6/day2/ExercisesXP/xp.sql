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
--In the dvdrental database write a query to select all the columns from the “customer” table.

SELECT * FROM customer;

--Write a query to display the names (first_name, last_name) using an alias named “full_name”.

SELECT first_name AS alias_last_name, last_name AS alias_name
FROM customer;

--Lets get all the dates that accounts were created.
-- Write a query to select all the create_date from the “customer” table (there should be no duplicates).

SELECT DISTINCT create_date FROM customer;

--Write a query to get all the customer details from the customer table,
--it should be displayed in descending order by their first name.

SELECT * FROM customer
ORDER BY first_name;

--Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.

SELECT *
FROM film
ORDER BY rental_rate ASC;

--Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT district, phone
FROM address
WHERE district='Texas';

--Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT *
FROM film
WHERE film_id='15' OR film_id='50';

--Write a query which should check if your favorite movie exists in the database.
-- Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.

SELECT *
FROM film
WHERE title='Alien Center';

--No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.

SELECT *
FROM film
WHERE title LIKE 'Al%';

--Write a query which will find the 10 cheapest movies.
SELECT * FROM film
ORDER BY replacement_cost ASC
LIMIT 10;

--Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
SELECT * FROM film
ORDER BY replacement_cost ASC
LIMIT 20;

--Write a query which will join the data in the customer table and the payment table.
--You want to get the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT DISTINCT payment.amount, payment.payment_date, payment.customer_id
FROM payment
INNER JOIN customer
ON payment.customer_id = customer.customer_id
ORDER BY customer_id;

--You need to check your inventory. Write a query to get all the movies which are not in inventory.

SELECT film.film_id, film.title
FROM film
LEFT JOIN inventory ON inventory.film_id = film.film_id
WHERE inventory.film_id IS NULL;

--Write a query to find which city is in which country.

SELECT DISTINCT city.city, country.country
FROM city
INNER JOIN country
ON city.country_id = country.country_id;
