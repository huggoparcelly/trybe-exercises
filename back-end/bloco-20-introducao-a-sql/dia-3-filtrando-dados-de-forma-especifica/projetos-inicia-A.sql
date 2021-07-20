-- o nome de todos os projetos cujo o código inicie com a letra A . em ordem alfabética.

SELECT Name FROM Scientists.Projects
WHERE Name LIKE 'A%'
ORDER BY Name;