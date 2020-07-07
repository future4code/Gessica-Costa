### Exercício 1
a) `VARCHAR` foi usado para representar o id, nome e gênero porque declara string, e `DATE` para data do nascimento.
b) `SHOW DATABASES` mostrou os databases que existem para mim. `SHOW TABLES` mostra as tabelas existentes.
c) `SHOW Actor` ocorre erro de sintaxe, mas `DESCRIBE Actor` mostra os campos(Field)/colunas da tabela Actor.

### Exercício 2
a) `INSERT INTO Actor (id, name, salary, birth_date, gender) VALUE ("002", "Glória Pires", 1200000, "1963-08-23", "female")`
b) A menssagem diz que a entrada `002` está duplicada para chave primária. O erro ocorreu pois o id é uma chave primária e não pode ser igual a um já cadastrado.
c) Mensagem informa que a contagem da coluna não bate com a conta dos valores.
Código correto: `INSERT INTO Actor (id, name, salary, birth_date, gender) VALUE ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");`
d) `name` é um campo que não pode ser nulo e nessa query ele não teve um valor atribuído.
Código correto: `INSERT INTO Actor (id, salary, birth_date, gender, name) VALUE("004", 400000, "1949-04-18", "male", "Antônio Fagundes");`
e) Formato de data incorreto, sem aspas, precisa ter aspas.
Código correto: `INSERT INTO Actor (id, name, salary, birth_date, gender) VALUE ("005", "Juliana Paes", 719333.33, "1979-03-26", "female");`

### Exercício 3
a) `SELECT * FROM Actor WHERE gender = "female";`
b) `SELECT salary FROM Actor WHERE name = "Tony Ramos";`
c) Nenhum resultado foi exibido, porque nenhum dos atores cadastrados possui `gender` com valor `invalid`.
d) `SELECT id, name, salary FROM Actor WHERE salary >= 500000;`
e) Ocorreu erro de coluna `nome` não conhecida. Acoluna cadastrada foi `name`.
Query correta: `SELECT id, name from Actor WHERE id = "002";`

### Exercício 4
a) A query representa os atores cujos nomes começam com A ou J, e possuem salário maior que R$300.000,00.
b) `SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;`
c) `SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";`
d) `SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND (salary BETWEEN 350000 AND 900000);`

### Exercício 5
a) `CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);`
`id` e `name` são `VARCHAR` que são strings com número de caracteres determinados. `synopsis` é `TEXT`, que não possui um tamanho máximo específico. A data de lançamento é um `DATE`, e `rating` é um inteiro, pois só assume valor de 0 a 10.
b) `INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES ("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",7);`
c) `INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27", 10);`
d) `INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES ( "003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02", 8);`
e) `INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES ("004", "O Auto da Compadecida", "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
"2000-09-10", 10);`

### Exercício 6
a) `SELECT id, title, rating from Movie WHERE id = "004";`
b) `SELECT * FROM Movie WHERE title="Dona Flor e Seus Dois Maridos";`
c) `SELECT id, title, synopsis FROM Movie WHERE rating >= 7;`

### Exercício 7
a) `SELECT * FROM Movie WHERE title LIKE "%vida%";`
b) `SELECT * FROM Movie WHERE title LIKE "%dois%" OR synopsis LIKE "%dois%";`
c) `SELECT * FROM Movie WHERE release_date <= "2020-07-06";`
d) `SELECT * FROM Movie WHERE release_date <= "2020-07-06" AND (title LIKE "%dois%" OR synopsis LIKE "%dois%") AND rating > 7;`
ou
`SELECT * FROM Movie WHERE release_date <= CURDATE() AND (title LIKE "%dois%" OR synopsis LIKE "%dois%") AND rating > 7;`