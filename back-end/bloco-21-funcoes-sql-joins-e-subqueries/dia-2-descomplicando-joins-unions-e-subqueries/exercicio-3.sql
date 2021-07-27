SELECT M.title, BO.rating FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice BO
ON BO.movie_id = M.id
ORDER BY BO.rating DESC;