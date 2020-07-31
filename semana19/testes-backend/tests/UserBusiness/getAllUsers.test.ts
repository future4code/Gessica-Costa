import { UserBusiness } from "../../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../../src/model/User";

describe("Testing UserBusiness.getAllUser", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test("Should return 'You must be an admin to acess this endpoint' when user does not exist", async () => {
        expect.assertions(2);
        try {
            const getAllUsers = jest.fn();
            userDatabase = { getAllUsers };

            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            );

            await userBusiness.getAllUsers(UserRole.NORMAL);
        } catch (err) {
            expect(err.errorCode).toBe(401);
            expect(err.message).toBe("You must be an admin to acess this endpoint");
        }
    });

    test("Should return all users", async () => {

        const getAllUsers = jest.fn(() => [
            new User(
                'id',
                'Curupira',
                'curupira@gmail.com',
                'saci',
                stringToUserRole('ADMIN')
            )]
        )

        userDatabase = { getAllUsers };

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const result = await userBusiness.getAllUsers(UserRole.ADMIN);
        expect(getAllUsers).toHaveBeenCalledTimes(1)
        expect(result).toContainEqual({
            id: 'id',
            name: 'Curupira',
            email: 'curupira@gmail.com',
            role: stringToUserRole('ADMIN')
        })
    });
});