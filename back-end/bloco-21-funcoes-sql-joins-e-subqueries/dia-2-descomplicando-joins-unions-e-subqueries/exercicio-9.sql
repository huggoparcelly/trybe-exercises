SELECT T.name, T.location FROM Pixar.Theater T
WHERE NOT EXISTS(
	SELECT * FROM Pixar.Movies M
    WHERE T.id = M.theater_id);