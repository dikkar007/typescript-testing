"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const app_1 = require("./app");
const Users_1 = require("./api/Users");
jest.mock('./api/Users');
describe('GET /api', () => {
    beforeAll(() => {
        Users_1.default.mockImplementation(() => {
            return {
                all: () => {
                    return 'Test';
                },
            };
        });
    });
    describe("GET /api", () => {
        it("should return 200 OK", () => {
            return request(app_1.default).get("/api/users")
                .expect(200);
        });
    });
    describe("GET ", () => {
        it("should return 200 OK", () => {
            return request(app_1.default).get("/")
                .expect(200);
        });
    });
});
//# sourceMappingURL=App.test.js.map