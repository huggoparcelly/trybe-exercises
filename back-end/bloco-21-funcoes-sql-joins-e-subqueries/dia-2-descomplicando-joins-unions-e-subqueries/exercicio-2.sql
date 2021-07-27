SELECT M.title, BO.international_sales, BO.domestic_sales FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice BO
ON BO.movie_id = M.id
WHERE BO.international_sales > BO.domestic_sales;