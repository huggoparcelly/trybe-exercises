SELECT * FROM sakila.category;

CREATE FULLTEXT INDEX name_id ON sakila.category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
-- Query cost: 0.35

DROP INDEX name_id on sakila.category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- Query cost: 1.85