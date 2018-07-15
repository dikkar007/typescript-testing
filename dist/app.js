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
const express = require("express");
const path = require("path");
const Users_1 = require("./api/Users");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
        this.express.use(express.static(path.resolve(__dirname, '../client/build')));
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', this.nocache, (req, res) => {
            res.status(200).sendFile(path.resolve(__dirname, '../client/build/index.html'));
        });
        this.express.use('/', router);
        const router_api = express.Router();
        router_api.get('/users', this.nocache, (req, res) => __awaiter(this, void 0, void 0, function* () {
            let userList = yield new Users_1.default().all();
            res.status(200).send(userList);
        }));
        this.express.use('/api', router_api);
    }
    nocache(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        next();
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map