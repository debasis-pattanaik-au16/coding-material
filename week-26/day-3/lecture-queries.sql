1. basic create commands
2. Talk about PRIMARY KEY
3. Talk about tuples and cardinality
4. Select command
5. Where clause
6. Group By
8. Order by

-- Creating a database
CREATE DATABASE `test`;

-- Deleting a database
DROP DATABASE `test`


-- create table
CREATE TABLE `employee` (
    emp_it INT,
    first_name TINYTEXT,
    LAST_name TINYTEXT,
    salary FLOAT,
    PRIMARY KEY (emp_it)
);

CREATE TABLE `account` (

	id INT,
	account_number TINYTEXT,
	is_active BOOLEAN,
	account_type VARCHAR(8)
);

ALTER TABLE account MODIFY	account_number INT;

DROP TABLE account;

ALTER TABLE table_name ADD column_name column-definition;  

ALTER TABLE table_name MODIFY column_name column_type;  

DROP TABLE employee;


WHERE  , GROUP BY, ORDER BY

SELECT * FROM customer WHERE customer_id<=10;

SELECT * FROM country WHERE country_id>10 OR country_id<15;


SELECT COUNT(*), first_name FROM actor GROUP BY first_name;

SELECT FROM film WHERE film_id>200 AND film_id<300  GROUP BY release_year ORDER BY release_year DESC;

SELECT * FROM payment ORDER BY amount DESC;




