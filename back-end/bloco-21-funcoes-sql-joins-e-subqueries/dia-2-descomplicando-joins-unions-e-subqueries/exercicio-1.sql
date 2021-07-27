SELECT M.title, BO.domestic_sales, BO.international_sales FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice BO
ON BO.movie_id = M.id;