-- exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A

SELECT Name, Code FROM Scientists.Projects
WHERE Name NOT LIKE 'A%';