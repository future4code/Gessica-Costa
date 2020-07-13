### Exercício 1
a) É uma propriedade que relaciona uma tabela com outra, referenciando uma *PRIMARY KEY*.
b) 
```
INSERT INTO Rating VALUES("001", "Ótimo filme", 10, "001");
INSERT INTO Rating VALUES("002", "Muito bom filme", 8, "002");
INSERT INTO Rating VALUES("003", "Bom filme", 7, "003");
```
c) Informa que não pode adicionar a linha filha, que a chave estrangeira falhou. O MySQL verificou que o id não existe na tabela Movie.
d) `ALTER TABLE Movie DROP COLUMN rating;`
e) A mensagem informa que não pode deletar uma linha pai. Isso ocorreu, porque a tabela Movie é pai da tebela Rating, e a chave estrangeira de Rating depende de Movie.

### Exercício 2
a) A tabela relaciona as tabelas Movie e Actor, então possui apenas o iddo filme e o id do ator, que também são chaves estrangeiras dos seus respectivos ids das tabelas de referência.
b)
```
INSERT INTO MovieCast VALUES ("001", "001");
INSERT INTO MovieCast VALUES ("001", "002");
INSERT INTO MovieCast VALUES ("002", "006");
INSERT INTO MovieCast VALUES ("002", "007");
INSERT INTO MovieCast VALUES ("003", "008");
INSERT INTO MovieCast VALUES ("003", "009");
```
c) Informa que a chave estrangeira falhou e não pode adicionar a linha filha.
O MySQL verifica que o ator com o id informado não existe. 
d) Informa que não pode deletar uma linha pai. Não permite deletar uma linha/ator que possua vínculo com outra tabela.

### Exercício 3
a) A query junta e exibe as tabelas Movie e Rating. O `ON` faz com que seja exibido apenas o que une as duas tabelas, no caso, se o id de uma for igual ao da outra, apenas uma linha que relaciona as duas será mostrada.
b)
```
SELECT title, Movie.id, rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

### Exercício 4
a)
```
SELECT title, Movie.id, rate, comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```
b) 
```
SELECT MovieCast.movie_id, title, MovieCast.actor_id FROM Movie
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;
```
c)
```
SELECT AVG(rate), title FROM Movie LEFT JOIN Rating ON Rating.movie_id = Movie.id GROUP BY (Movie.id);
```

### Exercício 5
a) Essa query junta os dados das três tabelas, por isso é necessário dois `JOIN`.
b) 
```
SELECT m.id AS Movie_id, title, a.id AS Actor_id, name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
c) O `m,title` deveria ser `m.title` para o programa identificar que o title é da tabela Movie, nomeada nessa query como `m`.
d)
```
SELECT m.title, a.name, rate FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
JOIN Rating r ON r.movie_id = mc.movie_id;
```

### Exercício 6
a) Relação N:M.
b)
```
CREATE TABLE Oscar(
    best_movie VARCHAR(255),
    best_direction VARCHAR(255),
	movie_id VARCHAR(255),
	date DATE,
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```
c)
d)