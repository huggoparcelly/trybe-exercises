--  número de empresas (fornecedores) que contém a letra F no código.

SELECT count(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';