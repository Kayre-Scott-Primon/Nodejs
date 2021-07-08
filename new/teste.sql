CREATE TABLE usuarios(
     nome VARCHAR(50),    /*max de char*/
     email VARCHAR(100),
     idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
     "S P",
     "email@teste08.com",
     8
);

SELECT * FROM usuarios WHERE idade = 8;

DELETE FROM usuarios WHERE idade < 8;
UPDATE usuarios SET nome = "Nome teste" WHERE nome = "Kayre Scott";