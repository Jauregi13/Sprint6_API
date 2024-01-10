
const request = require('supertest')
const app  = require('./../app') 
describe('GET ALL ROOMS',() => {

    test('Get all Rooms', async () => {
        
        const res = await request(app).get('/rooms')

        expect(res.statusCode).toEqual(200)

    })
})