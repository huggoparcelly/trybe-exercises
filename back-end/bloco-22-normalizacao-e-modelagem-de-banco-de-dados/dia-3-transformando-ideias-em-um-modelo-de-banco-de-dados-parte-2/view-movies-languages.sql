USE sakila;
CREATE VIEW movies_languages AS
SELECT f.title, l.language_id, l.name language
FROM language l
INNER JOIN film f
ON l.language_id = f.language_id;

SELECT * FROM movies_languages;