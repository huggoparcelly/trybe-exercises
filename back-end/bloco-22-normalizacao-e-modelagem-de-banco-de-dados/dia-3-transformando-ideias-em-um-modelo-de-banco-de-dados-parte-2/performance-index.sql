CREATE INDEX postal_code_id ON sakila.address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- Query cost 0.95 com o index
-- Query cost 65.40 sem o index

DROP INDEX postal_code_id ON sakila.address;