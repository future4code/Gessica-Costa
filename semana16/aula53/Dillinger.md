### Exercício 1
a) A resposta é um objeto onde os atributos são as colunas da tabela do banco de dados.

b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)
    return console.log(result[0][0])
}.

c)
const getActorGenderCount = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
    `)
    return console.log(result[0][0])
}.

### Exercício 2
a) `UPDATE Actor
SET name = "Glória Menezes", birth_date = "1934-10-19"
WHERE id = "003";`

b) `UPDATE Actor
SET name = UPPER("Juliana Pães")
WHERE name = "Juliana Paes";`
Query para voltar ao nome anterior:
`UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "Juliana Paes";`

c) `UPDATE Actor
SET name = "Lázaro Ramos",
salary = 500000,
birth_date = "1978-11-1",
gender = "male"
WHERE id = "005";`

d) `UPDATE Actor
SET identifier = "005"
WHERE id = 10;`
A mensagem de erro a coluna desconhecida `identifier`. O erro ocorreu, porque tentei alterar uma coluna que não existe.

### Exercício 3
a) `DELETE FROM Actor
WHERE name = "Fernanda Montenegro";`
b) `DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;`

### Exercício 4
a) `SELECT MAX(salary) FROM Actor;`
b) `SELECT MIN(salary) FROM Actor WHERE gender = "female";`
c) `SELECT COUNT(*) FROM Actor WHERE gender = "female";`
d) `SELECT SUM(salary) FROM Actor;`

### Exercício 5
a) Foram geradas duas colunas, uma com a quantidade de atores de cada gênero e outra com o gênero. `O GROUP BY` determina como a quantidade será distribuída.
b) `SELECT id, name
FROM Actor
ORDER BY name DESC;`
c) `SELECT *
FROM Actor
ORDER BY salary;`
d) `SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;`
e) SELECT AVG(salary) AS "Média salarial", gender FROM Actor
GROUP BY gender;``

### Exercício 6
a) `ALTER TABLE Movie ADD playing_limit_date DATE;`
b) `ALTER TABLE Movie CHANGE rating rating FLOAT;`
c) `UPDATE Movie SET playing_limit_date = "2020-07-10"
WHERE id = "001";`
`UPDATE Movie SET playing_limit_date = "2010-07-10"
WHERE id = "002";`
d) `DELETE FROM Movie WHERE id = "004";`
`UPDATE Movie SET synopsis = "história incríel com grande elenco." WHERE id = "004";`
A mensagem informa que foi feita a atualização, e 0 linhas foram afetadas, 0 mudanças. Acredito que isso ocorreu por a sintaxe estar correta, plausível, estão tudo bem, o MySQL roda a query e só não altera nada, já que o id não existe.

### Exercício 7
a) `SELECT COUNT(*) FROM Movie WHERE rating > 7.5;`
b) `SELECT AVG(rating) FROM Movie;`
c) `SELECT COUNT(*) FROM Movie WHERE playing_limit_date >= CURDATE();`
d) `SELECT COUNT(*) FROM Movie WHERE release_date >= CURDATE();`
e) `SELECT MAX(rating) FROM Movie;`
f) `SELECT MIN(rating) FROM Movie;`

### Exercício 8
a) `SELECT * FROM Movie ORDER BY title;`
b) `SELECT * FROM Movie ORDER BY title DESC LIMIT 5;`
c) `SELECT * FROM Movie ORDER BY playing_limit_date DESC LIMIT 3;`
d) `SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;`