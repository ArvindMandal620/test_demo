import supertest from 'supertest';
const request = supertest('https://eacp.energyaustralia.com.au/codingtest/api-docs/#/');

const TOKEN = 'abeyJhbGciOiJSUzI1NiIsImtpZCI6IlZVWEJaUHJSMkVFVl8yYWJHMUxhYWpEVkxGcyIsInBpLmF0bS';

describe('Users', () => {
    it('GET/users', () => {
        request.get('users?access-token=${TOKEN}').end((err, res) => {
            expect(res.body.data).to.not.be.empty;
            done();
        });
    });
});