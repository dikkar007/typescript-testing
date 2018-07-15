"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Http_1 = require("./Http");
const Users_1 = require("./Users");
jest.mock('./Http');
describe('Users', () => {
    let instance;
    beforeEach(() => {
        instance = new Users_1.default();
    });
    it('should get all users as an array', () => __awaiter(this, void 0, void 0, function* () {
        expect(instance).toBeInstanceOf(Users_1.default);
        const allUsers = yield instance.all();
        expect(allUsers).toBeDefined();
        expect(allUsers[0]).toBeDefined();
    }));
    it('should get receive an error', () => __awaiter(this, void 0, void 0, function* () {
        Http_1.default.prototype.get = jest.fn().mockImplementationOnce(() => {
            return new Error('Something weird happened');
        });
        const error = yield instance.all();
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('Something weird happened');
    }));
});
//# sourceMappingURL=Users.test.js.map