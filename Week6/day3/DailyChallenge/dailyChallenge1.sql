CREATE TABLE FirstTab (
     id integer,
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab


--the data:
--Table1 – FirstTab
--ID  Name
--5   Pawan
--6   Sharlee
--7   Krish
--NULL    Avtaar

--Table2 – SecondTab
--  ID
--  5
--  NULL

    SELECT COUNT(*)
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

--    prediction: 0

 SELECT COUNT(*)
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

    --    prediction: 2 (only 1 out of the 3 is id=5)

  SELECT COUNT(*)
     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

    --    prediction: 0 (every id in SecondTab is in FirstTab)

 SELECT COUNT(*)
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
        --    prediction: 2 (only 1 is NULL)

