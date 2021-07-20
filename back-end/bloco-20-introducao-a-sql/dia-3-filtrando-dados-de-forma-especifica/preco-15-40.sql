-- os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . por ordem crescente.

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY preco;