-- todos os fornecimentos que contenham a peça com code 2. por ordem alfabética de fornecedor.

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;