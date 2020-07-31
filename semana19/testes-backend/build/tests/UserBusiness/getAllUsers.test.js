"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = require("../../src/business/UserBusiness");
const User_1 = require("../../src/model/User");
describe("Testing UserBusiness.getAllUser", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
    test("Should return 'You must be an admin to acess this endpoint' when user does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const getAllUsers = jest.fn();
            userDatabase = { getAllUsers };
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.getAllUsers(User_1.UserRole.NORMAL);
        }
        catch (err) {
            expect(err.errorCode).toBe(401);
            expect(err.message).toBe("You must be an admin to acess this endpoint");
        }
    }));
    test("Should return all users", () => __awaiter(void 0, void 0, void 0, function* () {
        const getAllUsers = jest.fn(() => [
            new User_1.User('id', 'Curupira', 'curupira@gmail.com', 'saci', User_1.stringToUserRole('ADMIN'))
        ]);
        userDatabase = { getAllUsers };
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
        const result = yield userBusiness.getAllUsers(User_1.UserRole.ADMIN);
        expect(getAllUsers).toHaveBeenCalledTimes(1);
        expect(result).toContainEqual({
            id: 'id',
            name: 'Curupira',
            email: 'curupira@gmail.com',
            role: User_1.stringToUserRole('ADMIN')
        });
    }));
});
