USE sakila;

CREATE VIEW film_info AS
SELECT FA.actor_id, CONCAT(A.first_name, ' ', A.last_name) actor, F.title
FROM film_actor FA
INNER JOIN actor A
ON FA.actor_id = A.actor_id
INNER JOIN film F
ON FA.film_id = F.film_id
ORDER BY actor;

SELECT * FROM sakila.film_info;
