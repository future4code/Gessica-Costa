import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole } from "../../src/model/User";

describe("Testing UserBusiness.getProfile", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test("Should return 'User not found' when user does not exist", async () => {
        expect.assertions(2);
        try {
            const getUserById = jest.fn();
            userDatabase = { getUserById };

            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            );

            await userBusiness.getProfile("invalid-id");
        } catch (err) {
            expect(err.errorCode).toBe(404);
            expect(err.message).toBe("User not found");
        }
    });

    test("Should return user data", async () => {

        const getProfile = jest.fn((id: string) =>
            new User(
                'id',
                'Curupira',
                'curupira@gmail.com',
                'saci',
                stringToUserRole('ADMIN')
            )
        )

        userDatabase = { getProfile };

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const result = await userBusiness.getProfile('id');
        
        expect(result).toEqual({
            id: 'id',
            name: 'Curupira',
            email: 'curupira@gmail.com',
            role: stringToUserRole('ADMIN')
        })
    });
});