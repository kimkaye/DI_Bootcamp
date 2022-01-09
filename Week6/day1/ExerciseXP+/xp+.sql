CREATE TABLE students(
 customers_id SERIAL PRIMARY KEY,
 last_name VARCHAR (25) NOT NULL,
 first_name VARCHAR (25) NOT NULL,
date_birth DATE NOT NULL
)

--i forgot to change the customers_id to student id - sorry.

--Insert the data seen above to the students table. Find the most efficient way to insert the data.

INSERT INTO students (
    last_name,
    first_name,
    date_birth
)
VALUES
    (
        'Benichou',
        'Marc',
		'1998-11-02'
    ),
    (
          'Cohen',
        'Yoan',
		'2010-12-03'

    ),
    (
         'Benichou',
        'Lea',
		'1987-07-27'

    ),
	  (
         'Dux',
        'Amelia',
		'1996-04-07'
    ),
	  (
         'Grez',
        'David',
		'2003-06-14'

    ),
	  (
         'Simpson',
        'Omer',
		'1980-10-03'
    );
--Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).

INSERT INTO students (last_name, first_name, date_birth)
VALUES('kaye','kim','1995-08-01');

--Fetch all of the data from the table.

SELECT * FROM students;

--Fetch all of the students first_names and last_names.

SELECT last_name, first_name FROM students;

--Fetch the student which id is equal to 2.

SELECT last_name, first_name FROM students
WHERE customers_id='2';

--Fetch the student whose last_name is Benichou AND first_name is Marc.

SELECT last_name, first_name FROM students
WHERE first_name='Marc' AND last_name='Benichou';

--Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT last_name, first_name FROM students
WHERE first_name='Marc' OR last_name='Benichou';

--Fetch the students whose first_names contain the letter a.
SELECT last_name, first_name FROM students
WHERE first_name LIKE '%a%';

--Fetch the students whose first_names start with the letter a.
SELECT last_name, first_name FROM students
WHERE first_name LIKE 'A%';

--Fetch the students whose first_names end with the letter a.
SELECT last_name, first_name FROM students
WHERE first_name LIKE '%a';

--Fetch the students whose second to last letter of their first_names are a (Example: Leah).

SELECT last_name, first_name FROM students
WHERE first_name LIKE '%a_';

--Fetch the students whose id’s are equal to 1 AND 3 .

SELECT last_name, first_name FROM students
WHERE customers_id='1' OR customers_id='3';


--Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).

SELECT * FROM students
WHERE EXTRACT(YEAR from date_birth) >= 2000;







