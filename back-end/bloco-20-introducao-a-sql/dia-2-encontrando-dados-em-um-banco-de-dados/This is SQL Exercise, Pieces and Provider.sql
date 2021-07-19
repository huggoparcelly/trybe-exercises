SELECT * FROM Pieces;
SELECT * FROM Providers;
SELECT Piece, Price FROM Provides WHERE Provider = 'RBT';
SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;
SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 3;
SELECT * FROM Provides WHERE Provider = 'HAL' ORDER BY price DESC;
SELECT count(*) FROM Provides WHERE Piece = '1';