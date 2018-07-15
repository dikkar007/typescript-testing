import express = require('express');
import { Express, Request, Response } from "express";
import * as path from "path";
import Users from './api/Users';

class App {
    express: Express;

    constructor() {
        this.express = express();
        this.mountRoutes();

        this.express.use(express.static(path.resolve(__dirname, '../client/build')));
    }

    private mountRoutes(): void {
        
        const router = express.Router()
        router.get('/', this.nocache, (req, res) => {
            res.status(200).sendFile(path.resolve(__dirname, '../client/build/index.html'));
        })
        this.express.use('/', router)

        const router_api = express.Router()
        router_api.get('/users', this.nocache, async(req, res) => {
            let userList:string = await new Users().all();
         
            res.status(200).send(userList);
        })
        this.express.use('/api', router_api)
    }

    private nocache(req: Request, res: Response, next: any): void {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        next();
    }
}

export default new App().express
