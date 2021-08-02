USE sakila;

CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, c.city_id, c.city
FROM city c
INNER JOIN address a
ON a.city_id = c.city_id
ORDER BY c.city;

SELECT * FROM sakila.address_info;
