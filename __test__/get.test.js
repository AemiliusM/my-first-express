const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the dreams endpoint', async () => {
    const response = await request.get('/dreams');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

it('gets the dream show endpoint' , async () => {
    const response = await request.get('/dreams/1');
    expect(response.status).tobe(200);
    expect(response.body).toEqual(data[0]);
});