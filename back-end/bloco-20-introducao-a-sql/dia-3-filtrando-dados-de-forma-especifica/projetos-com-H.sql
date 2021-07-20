-- exibir o nome de todos os projetos cujo código contenha a letra H 

SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%H%';