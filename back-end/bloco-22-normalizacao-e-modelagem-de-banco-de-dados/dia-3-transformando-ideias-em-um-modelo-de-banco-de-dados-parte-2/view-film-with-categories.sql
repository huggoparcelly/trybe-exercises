CREATE VIEW sakila.film_with_categories AS
SELECT F.title, C.category_id, C.name FROM sakila.film_category FC
INNER JOIN sakila.film F
ON FC.film_id = F.film_id
INNER JOIN sakila.category C
ON FC.category_id = C.category_id
ORDER BY F.title;

select * from sakila.film_with_categories;
