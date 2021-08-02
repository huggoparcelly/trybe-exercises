USE zoologico;

CREATE TABLE cuidadores(
cuidador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
sobrenome VARCHAR(100) NOT NULL,
gerente_id INT NOT NULL,
FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
)ENGINE = InnoDB;