SELECT * FROM Pixar.Theater T
LEFT JOIN Pixar.Movies M
ON M.theater_id = T.id
ORDER BY T.name;