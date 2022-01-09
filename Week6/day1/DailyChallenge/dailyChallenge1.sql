CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (20) NOT NULL,
 last_name VARCHAR (25) NOT NULL,
 date_birth DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)

INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES('Matt','Damon','1970-10-08',5);

INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES('George','Clooney','1961-05-06',2);

SELECT COUNT(*) FROM actors

INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES('Matt',NULL,'1970-10-08',5);
--because the last name cant be NULL, the output will be an ERROR