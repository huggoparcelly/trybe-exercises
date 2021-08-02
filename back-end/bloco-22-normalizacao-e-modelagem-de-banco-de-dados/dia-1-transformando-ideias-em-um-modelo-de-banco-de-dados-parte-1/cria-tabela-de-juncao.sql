USE zoologico;

CREATE TABLE animal_cuidador(
animal_id INT,
cuidador_id INT,
CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
FOREIGN KEY (animal_id) REFERENCES animais(animal_id),
FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
)ENGINE = InnoDB;