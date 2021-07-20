-- exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N .

SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%N%';
