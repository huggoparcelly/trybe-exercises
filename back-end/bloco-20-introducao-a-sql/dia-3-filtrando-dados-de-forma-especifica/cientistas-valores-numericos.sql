-- exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3 , Ast3 ou Che1

SELECT Scientist FROM Scientists.AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1')