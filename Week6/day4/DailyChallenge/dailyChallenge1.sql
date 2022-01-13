--Daily Challenge : Items & Orders

--Create a table called orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.
CREATE TABLE items(
	item_id SERIAL PRIMARY KEY NOT NULL,
	item VARCHAR(30) NOT NULL,
	price SMALLINT NOT NULL DEFAULT 0
)

INSERT INTO items (item, price)
VALUES
('cookie', 4),
('apple pie', 4)

CREATE TABLE orders (
	order_id SERIAL PRIMARY KEY NOT NULL,
	item_id INTEGER REFERENCES items(item_id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
	quantity SMALLINT DEFAULT 1 NOT NULL
);

INSERT INTO orders (item_id, quantity)
VALUES
((SELECT item_id FROM items WHERE item = 'cookie'), 2);

-- Create a function that returns the total price for a given order.

CREATE OR REPLACE FUNCTION calculate_total(od_id INTEGER)
RETURNS INTEGER
	AS
$$
DECLARE
	total INTEGER;
BEGIN
	SELECT price*quantity AS res
	FROM items
	JOIN orders
	ON orders.item_id = items.item_id
	WHERE orders.order_id = od_id
	INTO total;
	RETURN res;
END;
$$
LANGUAGE 'plpgsql';

SELECT calculate_total((SELECT order_id
						FROM orders
						INNER JOIN items
						ON items.item_id = orders.item_id
						WHERE item = 'cookie'));