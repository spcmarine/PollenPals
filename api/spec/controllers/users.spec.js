const server = require("../../app");
const request = require('supertest');
require('../mongodb_helper');
const User = require('../../models/user.js');

describe('/users', () => {
  beforeEach(async () => {
    await User.deleteMany({})
  });

  afterAll(async () => {
    await User.deleteMany({})
    await server.close()
  })

  describe("POST when creating a new user with valid data", () => {
    it('returns a status code of 201', async () => {
      let response = await request(server)
        .post('/users')
        .send({
          email: 'tess.test@test.com', 
          firstName: "Tess", 
          lastName: "Test", 
          password:"testpass"
        });
      expect(response.statusCode).toBe(201);
    });

    it('creates a user with the provided information', async () => {
      await request(server)
        .post("/users")
        .send({
          email: 'tess.test@test.com', 
          firstName: "Tess", 
          lastName: "Test", 
          password:"testpass"
        });
      let users = await User.find()
      let newUser = users[0]
      expect(newUser.email).toEqual("tess.test@test.com")
    });
  });

  describe('POST when password is missing', () => {
    it('returns a status code of 400', async () => {
      let response = await request(server)
        .post('/users')
        .send({
          email: "tess.test@test.com"
        });
        expect(response.statusCode).toBe(400)
    });

    it('does not create a user', async () => {
      await request(server)
        .post('/users')
        .send({
          email: "tess.test@test.com"
        });
      let users = await User.find()
      expect(users.length).toEqual(0)
    });
  });

  describe('POST when email is missing', () => {
    it('returns a response code of 400', async () => {
      let response = await request(server)
        .post("/users")
        .send({
          password: "testPass"
        });
      expect(response.statusCode).toBe(400);
    });

    it('does not create a user', async () => {
      await request(server)
        .post("/users")
        .send({
          password: "testPass"
        });
      let users = await User.find();
      expect(users.length).toEqual(0);
    });
  });
});