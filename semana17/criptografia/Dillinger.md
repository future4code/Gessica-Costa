### Exercício 1
a) `round` é o `cost`, mais ou menos o número de iterações que o algoritmo irá fazer, seu valor recomendado é 12, utilizei 12, porque éo padrão usado na maioria das libs. `salt` é uma função que gera o hash.
b)
```
import * as bcrypt from 'bcryptjs'

export class HashManager {
    public async hash(text: string): Promise<string> {
        const rounds = 12
        const salt = await bcrypt.genSalt(rounds)
        const cipherText = await bcrypt.hash(text, salt)

        return cipherText
    }
}
```
c)
```
public async compare(s: string, hash: string): Promise<boolean> {
        const result = await bcrypt.compare(s, hash)
        return result
    }
```

### Exercício 2
a) Primeiro devo modificar o cadastro, porque ele irá salvar no banco o senha do usuário criptografada. Só depois devo alterar o login para que reconheça a criptografia da senha.
b)
```
const hashManager = new HashManager()
    const cipherText = await hashManager.hash(userData.password)

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, cipherText);
```
c)
```
const hashManager = new HashManager()
    const passwordIsCorrect = await hashManager.compare(userData.password, user.password)

    if (!passwordIsCorrect) {
      throw new Error("Invalid password");
    }
```
d) Não é preciso alterar esse endpoint, porque ele não interage com a senha do usuário.

### Exercício 3
a)`ALTER TABLE User ADD COLUMN role ENUM("NORMAL","ADMIN") DEFAULT "NORMAL";`
b)
```
public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role
    };
    return result;
  }

interface AuthenticationData {
  id: string,
  role: USER_ROLES;
}
```
c)
```
const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };

await userDb.createUser(id, userData.email, cipherText, userData.role);

const token = authenticator.generateToken({
      id, role: userData.role
    });
```
d)
```
const token = authenticator.generateToken({
      id: user.id,
      role: user.role
    });
```

### Exercício 4
a)
```
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const authenticator = new Authenticator();
    const tokenData = authenticator.getData(req.headers.authorization as string);

    if(tokenData.role !== "NORMAL") {
      throw new Error("Unauthorized")
    }

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(tokenData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 5
```
app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const authenticator = new Authenticator()
    const tokenData = authenticator.getData(req.headers.authorization as string)
    
    if (tokenData.role !== "ADMIN") {
      throw new Error("Apenas administradores podem deletar outro usuário")
    }

    const userDB = new UserDatabase()
    await userDB.deleteUser(req.params.id)

    res.status(200).send({
      message: "Usuário deletado"
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 6
```
app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const authenticator = new Authenticator();
    const tokenData = authenticator.getData(req.headers.authorization as string);

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(req.params.id);

    res.status(200).send({
      id: user.id,
      email: user.email
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
