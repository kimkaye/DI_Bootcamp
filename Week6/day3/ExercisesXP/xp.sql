--Exercise 1: DVD Rental

--Get a list of all film languages.
SELECT DISTINCT language.name
FROM language
INNER JOIN film
ON language.language_id = film.language_id;

--Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
--Get all films, even if they don’t have languages.
--Get all languages, even if there are no films in those languages.

--inner join
SELECT DISTINCT film.title, language.name, film.description
FROM language
INNER JOIN film
ON language.language_id = film.language_id;

--LEFT JOIN Syntax
SELECT DISTINCT film.title, language.name, film.description
FROM language
LEFT JOIN film
ON language.language_id = film.language_id;

-- RIGHT JOIN
SELECT DISTINCT film.title, language.name, film.description
FROM language
RIGHT JOIN film
ON language.language_id = film.language_id;

--FULL OUTER JOIN
SELECT DISTINCT film.title, language.name, film.description
FROM language
FULL OUTER JOIN film
ON language.language_id = film.language_id;

--Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
 	new_film_id SERIAL PRIMARY KEY,
	new_film_name VARCHAR (45) NOT NULL
 );


 INSERT INTO new_film (new_film_name)
 VALUES('Spongebob');

 INSERT INTO new_film (new_film_name)
 VALUES('Do Not Look Up');

  INSERT INTO new_film (new_film_name)
  VALUES('The Lost Daughter');

   INSERT INTO new_film (new_film_name)
   VALUES('The Matrix Resurrections');

    INSERT INTO new_film (new_film_name)
    VALUES('The Power of the Dog');

     INSERT INTO new_film (new_film_name)
     VALUES('The Tender Bar');

      INSERT INTO new_film (new_film_name)
      VALUES('The Kings Man');

--      Create a new table called customer_review, which will contain film reviews that customers will make.

CREATE TABLE customer_review(
 	review_id SERIAL PRIMARY KEY,
	film_id INTEGER REFERENCES new_film (new_film_id) ON DELETE CASCADE,
	language_id INTEGER REFERENCES language (language_id),
	title VARCHAR (45) NOT NULL,
	score INTEGER NOT NULL,
	review_text VARCHAR NOT NULL,
	last_update DATE NOT NULL
 );

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
CREATE TABLE customer_review(
 	review_id SERIAL PRIMARY KEY,
	film_id INTEGER REFERENCES new_film (new_film_id) ON DELETE CASCADE,
	language_id INTEGER REFERENCES language (language_id),
	title VARCHAR (45) NOT NULL,
	score INTEGER NOT NULL,
	review_text VARCHAR NOT NULL,
	last_update DATE NOT NULL
 );

 INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
 VALUES(1, 1, 'good movie', 7, 'the movie was great', '2022-01-12 12:58:19' );

 INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
 VALUES(2, 2, 'great movie', 10, 'the movie was amazing', '2022-01-12 12:59:19' );

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE new_film_name ='Spongebob';

--the customer review on the deleted film was deleted

--Exercise 2 : DVD Rental
--Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = 2
WHERE film_id = 1;

--Which foreign keys (references) are defined for the customer table?
--How does this affect the way in which we INSERT into the customer table?
--store_id, address_id - we have to insert id that exist in the address and store table

--We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;

--easy?

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT ('return_date')
FROM rental
WHERE return_date IS NULL;

--183

--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

SELECT rental.return_date, payment.amount
FROM rental
INNER JOIN payment
ON rental.rental_id = payment.rental_id
WHERE return_date IS NULL
ORDER BY amount DESC
LIMIT 30;


--Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--The 1st film
--The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title FROM film
WHERE description LIKE '%Sumo%';

--The 2nd film
--A short documentary (less than 1 hour long), rated “R”.

SELECT * FROM film
WHERE  rating = 'R'
AND length <= 60
AND description LIKE '%Documentary%';

--The 3rd film
--A film that his friend Matthew Mahan rented.
--He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

SELECT payment.amount, customer.first_name, customer.last_name, rental.return_date
FROM rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
ON inventory.film_id = film.film_id
INNER JOIN payment
ON rental.customer_id = payment.customer_id
WHERE first_name='Matthew' AND last_name = 'Mahan' AND amount >= 4 AND return_date >= '2005-07-28' AND return_date < '2005-08-02';


--The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT payment.amount, customer.first_name, customer.last_name, rental.return_date, film.title, film.description, film.replacement_cost
FROM rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
ON inventory.film_id = film.film_id
INNER JOIN payment
ON rental.customer_id = payment.customer_id
WHERE first_name='Matthew' AND last_name = 'Mahan'
AND (title LIKE '%boat%' OR description LIKE '%Boat%')
ORDER BY replacement_cost DESC;
