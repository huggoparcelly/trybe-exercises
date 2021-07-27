-- SUBQUERY
SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN (
	SELECT id FROM Pixar.Movies
    WHERE year > 2009);
    
-- INNER JOIN
SELECT rating FROM Pixar.BoxOffice BO
INNER JOIN Pixar.Movies M
ON M.id = BO.movie_id
WHERE M.year > 2009;