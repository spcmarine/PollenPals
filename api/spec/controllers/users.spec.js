const server = require("../../app");
const request = require('supertest');
require('../mongodb_helper');
const User = require('../../models/user.js');

describe('/users', () => {
  beforeEach(async () => {
    await User.deleteMany({})
  });

  afterAll(async () => {
    await server.close()
  })

  describe("POST when creating a new user", () => {
    it('returns a status code of 201', async () => {
      let response = await request(server)
        .post('/users')
        .send({email: 'tess.test@test.com', firstName: "Tess", lastName: "Test", password:"testpass"})
      expect(response.statusCode).toBe(201);
    });
  });
});