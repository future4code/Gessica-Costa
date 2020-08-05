import { UserBusiness } from "../src/business/UserBusiness"
import { UserInputDTO } from "../src/model/User";

describe('Testing UserBusines.signup', () => {

    let userDatabase = {};
    let authenticator = {};
    let hashManager = {};
    let idGenerator = {}

    test('Should return the acessToken in sucess', async () => {

        const generateId = jest.fn(() => 'id')
        idGenerator = { generate: generateId }

        const hash = jest.fn(() => 'hash')
        hashManager = { hash }

        const token = jest.fn(() => 'token')
        authenticator = { generateToken: token }

        const createUser = jest.fn(() => { })
        userDatabase = { createUser }

        const userBusiness = new UserBusiness(
            userDatabase as any,
            authenticator as any,
            hashManager as any,
            idGenerator as any
        );

        const input: UserInputDTO = {
            email: "gessica@gmail.com",
            name: "Géssica",
            password: "123456",
            role: "NORMAL"
        }

        const result = await userBusiness.createUser(input)

        expect(result).toBe("token")
        expect(hash).toHaveBeenCalledWith('123456')
        expect(generateId).toHaveBeenCalledTimes(1)
        expect(token).toHaveBeenCalledWith({ id: 'id', role: 'NORMAL' })
        expect(createUser).toHaveBeenCalledWith(
            'id',
            "gessica@gmail.com",
            "Géssica",
            "hash",
            "NORMAL"
        )
    })

    test('Should return Invalid email for email without @', async () => {
        expect.assertions(1)

        try {
            const generateId = jest.fn(() => 'id')
            idGenerator = { generate: generateId }

            const hash = jest.fn(() => 'hash')
            hashManager = { hash }

            const token = jest.fn(() => 'token')
            authenticator = { generateToken: token }

            const createUser = jest.fn(() => { })
            userDatabase = { createUser }

            const userBusiness = new UserBusiness(
                userDatabase as any,
                authenticator as any,
                hashManager as any,
                idGenerator as any
            );

            const input: UserInputDTO = {
                email: "gessicagmail.com",
                name: "Géssica",
                password: "123456",
                role: "NORMAL"
            }

            const result = await userBusiness.createUser(input)
        } catch (err) {

            expect(err.message).toBe("Invalid email")
        }
    })

    test('Should return Missing input for empty name', async () => {
        expect.assertions(1)

        try {
            const generateId = jest.fn(() => 'id')
            idGenerator = { generate: generateId }

            const hash = jest.fn(() => 'hash')
            hashManager = { hash }

            const token = jest.fn(() => 'token')
            authenticator = { generateToken: token }

            const createUser = jest.fn(() => { })
            userDatabase = { createUser }

            const userBusiness = new UserBusiness(
                userDatabase as any,
                authenticator as any,
                hashManager as any,
                idGenerator as any
            );

            const input: UserInputDTO = {
                email: "gessica@gmail.com",
                name: "",
                password: "123456",
                role: "NORMAL"
            }

            const result = await userBusiness.createUser(input)
        } catch (err) {

            expect(err.message).toBe("Missing input")
        }
    })

    test('Should return Invalid password for password smaller than 6 caracteres', async () => {
        expect.assertions(1)

        try {
            const generateId = jest.fn(() => 'id')
            idGenerator = { generate: generateId }

            const hash = jest.fn(() => 'hash')
            hashManager = { hash }

            const token = jest.fn(() => 'token')
            authenticator = { generateToken: token }

            const createUser = jest.fn(() => { })
            userDatabase = { createUser }

            const userBusiness = new UserBusiness(
                userDatabase as any,
                authenticator as any,
                hashManager as any,
                idGenerator as any
            );

            const input: UserInputDTO = {
                email: "gessica@gmail.com",
                name: "Géssica",
                password: "123",
                role: "NORMAL"
            }

            const result = await userBusiness.createUser(input)
        } catch (err) {

            expect(err.message).toBe("Invalid password")
        }
    })

    test('Should return Role must be NORMAL ou ADMIN for invalid role', async () => {
        expect.assertions(1)

        try {
            const generateId = jest.fn(() => 'id')
            idGenerator = { generate: generateId }

            const hash = jest.fn(() => 'hash')
            hashManager = { hash }

            const token = jest.fn(() => 'token')
            authenticator = { generateToken: token }

            const createUser = jest.fn(() => { })
            userDatabase = { createUser }

            const userBusiness = new UserBusiness(
                userDatabase as any,
                authenticator as any,
                hashManager as any,
                idGenerator as any
            );

            const input: UserInputDTO = {
                email: "gessica@gmail.com",
                name: "Géssica",
                password: "123456",
                role: "TESTE"
            }

            const result = await userBusiness.createUser(input)
        } catch (err) {

            expect(err.message).toBe("Role must be NORMAL ou ADMIN")
        }
    })
})