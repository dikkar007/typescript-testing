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
const axios_1 = require("axios");
class Http {
    constructor() {
        this._httpClient = axios_1.default.create({
            baseURL: 'https://reqres.in/api/',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this._httpClient.get(url);
            return JSON.stringify(users.data.data);
        });
    }
}
exports.default = Http;
//# sourceMappingURL=Http.js.map