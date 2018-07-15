import Http from './Http';
import Users from './Users';
jest.mock('./Http');

describe('Users', () => {
    let instance: Users;

    beforeEach(() => {
        instance = new Users();
    });

    it('should get all users as an array', async () => {
        expect(instance).toBeInstanceOf(Users);
        const allUsers = await instance.all();
        expect(allUsers).toBeDefined();
        expect(allUsers[0]).toBeDefined();
    });

    it('should get receive an error', async () => {
        Http.prototype.get = jest.fn().mockImplementationOnce(() => {
            return new Error('Something weird happened');
        });
        const error: any = await instance.all();
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('Something weird happened')
    });
});
