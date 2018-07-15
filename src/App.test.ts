import * as request from 'supertest';
import app from './app';
import Users from './api/Users';
jest.mock('./api/Users');

describe('GET /api', () => {

    beforeAll(() => {
        (Users as any).mockImplementation(() => {
          return {
            all: () => {
                return 'Test';
            },
          };
        });
      });

      describe("GET /api", () => {
        it("should return 200 OK", () => {
          return request(app).get("/api/users")
            .expect(200);
        });
      });

      describe("GET ", () => {
        it("should return 200 OK", () => {
          return request(app).get("/")
            .expect(200);
        });
      });

});
