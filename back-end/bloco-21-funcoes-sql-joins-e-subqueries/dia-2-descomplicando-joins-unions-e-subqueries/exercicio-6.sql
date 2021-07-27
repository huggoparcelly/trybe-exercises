-- SUBQUERY
SELECT title FROM Pixar.Movies
WHERE id IN
	(SELECT movie_id FROM Pixar.BoxOffice
    WHERE rating > 7.5);

-- INNER JOIN
SELECT M.title FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice BO
ON BO.movie_id = M.id
WHERE BO.rating > 7.5;