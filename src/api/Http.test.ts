import Http from './Http';
describe('Http', () => {
    let instance: Http;

    beforeEach(() => {
        instance = new Http();
    });

    it('should get all users as an array', async () => {
        expect(instance).toBeInstanceOf(Http);
        const allUsers = await instance.get('users');
        expect(allUsers).toBeDefined();
        expect(allUsers[0]).toBeDefined();
    });

});
