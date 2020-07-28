### Exercício 1
a)
```
interface User {
    name: string,
    balance: number
}
```
b)
```
export const performPurchase = (user: User, value: number):
    User | undefined => {

    let userUpdated: User

    return user.balance >= value ?
        userUpdated = {
            name: user.name,
            balance: user.balance - value
        }
        :
        undefined
}
```

### Exercício 2
a)
```
test("Usuário com saldo maior que o valor de compra", () => {
        const user: User = {
            name: "Géssica",
            balance: 150
        }
        const value: number = 100
        const result = performPurchase(user, value)

        expect(result).toEqual({
            name: "Géssica",
            balance: 50
        })
    })
```
b)
```
test("Usuário com saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Géssica",
            balance: 100
        }
        const value: number = 100
        const result = performPurchase(user, value)

        expect(result).toEqual({
            name: "Géssica",
            balance: 0
        })
    })
```
c)
```
test("Usuário com saldo menor que o valor de compra", () => {
        const user: User = {
            name: "Géssica",
            balance: 50
        }
        const value: number = 100
        const result = performPurchase(user, value)

        expect(result).toEqual(undefined)
    })
```

### Exercício 3
b)
```
export const verifyAge = (casino: Casino, users: User[]): Result => {
  let allowed: string[] = []
  let unallowed: string[] = []
  let allowedBrazilian: string[] = []
  let allowedAmerican: string[] = []
  let unallowedBrazilian: string[] = []
  let unallowedAmerican: string[] = []

  users && users.map((u: any) => {
    if (casino.location === LOCATION.BRAZIL) {
      u.age >= 18 ?
        allowed.push(u)
        : unallowed.push(u)
    } else if (casino.location = LOCATION.EUA) {
      (u.age >= 21) ?
        allowed.push(u)
        : unallowed.push(u)
    }
  })

  allowed && allowed.map((u: any) => {
    u.nacionality === NACIONALITY.BRAZILIAN ?
      allowedBrazilian.push(u.name)
      : allowedAmerican.push(u.name)
  })

  unallowed && unallowed.map((u: any) => {
    u.nacionality === NACIONALITY.BRAZILIAN ?
      unallowedBrazilian.push(u.name)
      : unallowedAmerican.push(u.name)
  })

  return {
    brazilian: {
      allowed: allowedBrazilian,
      unallowed: unallowedBrazilian
    },
    american: {
      allowed: allowedAmerican,
      unallowed: unallowedAmerican
    }
  }
}
```
c) O mais difícil foi juntar a lógica com as interfaces, entender que Result é um objeto com um objeto com um array dentro, e ter que estruturar a saída da função de acordo com o Result.

### Exercício 4
a)
```
test("Usuário brasileiro que possa entrar em um estabelecimento no Brasil", () => {
        const user: User = {
            name: "Maria",
            age: 20,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }
        const result: Result = verifyAge(casino, [user])

        expect(result.brazilian.allowed).toEqual(["Maria"])
    })
```
b)
```
test("Usuário americano que possa entrar em um estabelecimento no Brasil", () => {
        const user: User = {
            name: "Meg",
            age: 20,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }
        const result: Result = verifyAge(casino, [user])

        expect(result.american.allowed).toEqual(["Meg"])
    })
```
c)
```
test("Dois usuários brasileiros e dois americanos em um estabelecimento no EUA", () => {
        const brazilian1: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: User = {
            name: "Meg",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: User = {
            name: "Jack",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.EUA
        }
        const result: Result = verifyAge(casino, [brazilian1, brazilian2, american1, american2])

        expect(result.brazilian.allowed).toEqual([])
    })
```
d)
```
test("Dois brasileiros e dois americanos em um estabelecimento no EUA", () => {
        const brazilian1: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: User = {
            name: "Meg",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: User = {
            name: "Jack",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.EUA
        }
        const result: Result = verifyAge(casino, [brazilian1, brazilian2, american1, american2])

        expect(result.american.allowed).toEqual(["Meg", "Jack"])
    })
```

### Exercício 5
a)
```
test("Um brasileiro em um estabelecimento no Brasil por tamanho do array", () => {
        const brazilian: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }
        const result: Result = verifyAge(casino, [brazilian])

        expect(result.brazilian.allowed.length).toBeGreaterThan(0)
        expect(result.brazilian.allowed.length).toBeLessThan(2)
    })
```
b)
```
test("Um americano em um estabelecimento no Brasil por tamanho do array", () => {
        const brazilian: User = {
            name: "Meg",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }
        const result: Result = verifyAge(casino, [brazilian])

        expect(result.american.unallowed.length).toEqual(0)
    })
```
c)
```
test("Dois brasileiros e dois americanos em um estabelecimento no EUA por tamanho do array", () => {
        const brazilian1: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: User = {
            name: "Meg",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: User = {
            name: "Jack",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.EUA
        }
        const result: Result = verifyAge(casino, [brazilian1, brazilian2, american1, american2])

        expect(result.american.unallowed[1]).toEqual("Jack")
    })
```
d)
```
test("Dois brasileiros e dois americanos em um estabelecimento no EUA", () => {
        const brazilian1: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: User = {
            name: "Meg",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: User = {
            name: "Jack",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.EUA
        }
        const result: Result = verifyAge(casino, [brazilian1, brazilian2, american1, american2])

        expect(result.brazilian.unallowed.length).toBeGreaterThan(1)
        expect(result.american.unallowed.length).toBeLessThan(1)
        expect(result.american.allowed.length).toEqual(2)
    })
```

### Exercício 6
a)
```
describe("Testins PostDatabase", () => {
    test("Create Post", async () => {
        const post: PostDatabase = new PostDatabase()
        await post.create("1", "PhotoLink", "Descrição", "Normal", "709b79ad-4117-43e8-ab6f-9645c17bb3fd")

        const result = await post.checkById("1")
        expect(result).toEqual(true)
    })
})
```
b)
```
afterAll(async () => {
        await post.deletePost("1")
        await Database.destroyConnection()
    })
```
Quando os teste acabam precisamos apagar os testes criados.

### Exercício 7
a)
```
test("Create Post with error", async () => {
        try {
            await post.create("1", "PhotoLink", "Descrição", "Normal", "709b79ad-4117-43e8-ab6f-9645c17bb3fd")
            await post.create("1", "PhotoLink", "Descrição", "Normal", "709b79ad-4117-43e8-ab6f-9645c17bb3fd")

        } catch (err) {
            expect(err).not.toBeUndefined()
            expect(err).not.toBe(undefined)
            expect(err.code).toEqual("ER_DUP_ENTRY")
        }
    })
```