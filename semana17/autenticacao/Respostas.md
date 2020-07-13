### Exercício 1
a) Com o que sabemos até agora, acredito que String é a melhor opção para os ids. String possui um número muito maior de caracteres do que números, logo, é mais difícil decifrar e é mais seguro.
b)
```
import { v4 } from 'uuid'

export class IdGenerator {
    public generate(): string {
        return v4()
    }
}
```

### Exercício 2
a) O código primeiro conecta com o banco de dados, e a função createUser é uma função assíncrona que recebe os valores de id, email e password e insere na tabela definida na variável userTableName.
b)
```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
c)
```
import { db } from './dataSetup'

export class UserDatabase {
    private static TABLE_NAME = 'User'

    public async createUser(
        id: string,
        email: string,
        password: string
    ): Promise<void> {
        await db()
            .insert({
                id,
                email,
                password
            })
            .into(UserDatabase.TABLE_NAME)
    }
}
```
d)
```
const newUser: UserDatabase = new UserDatabase
newUser.createUser('1', 'astrodev@gmail.com', '123')
```

### Exercício 3
a) Torna process.env.JWT_KEY em String. Precisamos dela para informar ao programa que é uma String.
b)
```
import * as jwt from 'jsonwebtoken'

export class Authenticator {
    private static EXPIRES_IN = '1min'

    public generateToken = (input: AuthenticationData): string => {
        const token = jwt.sign(
            { id: input.id },
            process.env.JWT_KEY as string,
            { expiresIn: Authenticator.EXPIRES_IN }
        )
        return token
    }
}

interface AuthenticationData {
    id: string
}
```

### Exercício 4
a) 
b) 
c) 