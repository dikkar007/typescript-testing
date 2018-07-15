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
describe('Http', () => {
    let instance;
    beforeEach(() => {
        instance = new Http_1.default();
    });
    it('should get all users as an array', () => __awaiter(this, void 0, void 0, function* () {
        expect(instance).toBeInstanceOf(Http_1.default);
        const allUsers = yield instance.get('users');
        expect(allUsers).toBeDefined();
        expect(allUsers[0]).toBeDefined();
    }));
});
//# sourceMappingURL=Http.test.js.map