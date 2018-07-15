import  Http  from './Http';

class Users {
    http: Http;
    constructor() {
        this.http = new Http();
    }

    public async all() : Promise<string>  {
        const users:string = await this.http.get('users');
        return users;
    }
}
export default Users;
