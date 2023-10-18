const server = require("../../app");
const request = require('supertest');
require('../mongodb_helper');
const Listing = require('../../models/listing.js');
const User = require('../../models/user');
const JWT = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;


let token


describe('/listings', () => {
    beforeAll( async () => {
        const user = new User({email: "test@test.com", password: "12345678", firstName: "Tess", lastName: "Test"});
        await user.save();
    
        token = JWT.sign({
          user_id: user.id,
          // Backdate this token of 5 minutes
          iat: Math.floor(Date.now() / 1000) - (5 * 60),
          // Set the JWT token to expire in 10 minutes
          exp: Math.floor(Date.now() / 1000) + (10 * 60)
        }, secret);
        console.log(secret)
      });
    
    beforeEach(async () => {
        await Listing.deleteMany({});
    });

    

    afterAll(async () => {
        await User.deleteMany({});
        await Listing.deleteMany({});
        await server.close();
    });

    describe("POST when creating a new listing with valid data", () => {
        it('returns a status code of 201', async () => {
            let response = await request(server)
            .post('/listings')
            .set("Authorization", `Bearer ${token}`)
            .send({
                userName: 'John Smith',
                userEmail: 'John@email.com',
                userPlant: 'test plant',
                requestedPlants: ['another plant'],
                userLocation: 'Somewhere'
            });
            expect(response.statusCode).toBe(201);
        })
        it('Will add a new listing to the database', async () => {
            await request(server)
            .post('/listings')
            .set("Authorization", `Bearer ${token}`)
            .send({
                userName: 'John Smith',
                userEmail: 'John@email.com',
                userPlant: 'test plant',
                requestedPlants: ['another plant'],
                userLocation: 'Somewhere'
            });
            let listings = await Listing.find();
            expect(listings.length).toBe(1);
            expect(listings[0].userPlant).toEqual('test plant')
        })
        it('Returns a new token', async () => {
            let response = await request(server)
            .post('/listings')
            .set("Authorization", `Bearer ${token}`)
            .send({
                userName: 'John Smith',
                userEmail: 'John@email.com',
                userPlant: 'test plant',
                requestedPlants: ['another plant'],
                userLocation: 'Somewhere'
            });
            let newPayload = JWT.decode(response.body.token, process.env.JWT_SECRET);
            let originalPayload = JWT.decode(token, process.env.JWT_SECRET);
            expect(newPayload.iat > originalPayload.iat).toEqual(true)
        })
        it('Returns a 401 status code when the token is missing', async () => {
            let response = await request(server)
            .post('/listings')
            .send({
                userName: 'John Smith',
                userEmail: 'John@email.com',
                userPlant: 'test plant',
                requestedPlants: ['another plant'],
                userLocation: 'Somewhere'
            });
            expect(response.statusCode).toBe(401)
        })
        it("does not create a listing without a token", async () => {
            await request(server)
              .post("/listings")
              .send({ userName: 'John Smith',
              userEmail: 'John@email.com',
              userPlant: 'test plant',
              requestedPlants: ['another plant'],
              userLocation: 'Somewhere'
             });
            let listings = await Listing.find();
            expect(listings.length).toEqual(0);
          });
        
        it("does not return a token when no token is given", async () => {
            let response = await request(server)
              .post("/listings")
              .send({ userName: 'John Smith',
              userEmail: 'John@email.com',
              userPlant: 'test plant',
              requestedPlants: ['another plant'],
              userLocation: 'Somewhere'});
            expect(response.body.token).toEqual(undefined);
          });
    })
})