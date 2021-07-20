-- todas as informações dos fornecedores que são empresas limitadas (LTDA). Em ordem alfabética decrescente.

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name;