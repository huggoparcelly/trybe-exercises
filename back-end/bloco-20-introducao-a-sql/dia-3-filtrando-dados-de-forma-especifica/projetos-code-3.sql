-- exibir o código e nome de todos os projetos que possuam em seu código o número 3 . em ordem alfabética.

SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%3%'
ORDER BY Name;
