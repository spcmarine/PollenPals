const server = require('../../app');
const request = require("supertest");
require('../mongodb_helper');
const User = require('../../models/user');

describe('/tokens', () => {
  beforeAll( async () => {
    await User.deleteMany({});
    const user = {
      email: "tess.test@test.com",
      firstName: "Tess",
      lastName: "Test",
      password: "Password"
    };
  await request(server)
    .post('/users')
    .send(user)
  });

  afterAll(async () => {
    await User.deleteMany({});
    await server.close()
  });


  it('it returns a token when username and password are correct', async () => {
    let response = await request(server)
      .post('/tokens')
      .send({email: "tess.test@test.com", password: "Password"})
    expect(response.status).toEqual(201)
    expect(response.body.token).not.toEqual(undefined)
    expect(response.body.message).toEqual("OK")
  });
  it('it does not return a token when password is incorrect', async () => {
    let response = await request(server)
      .post('/tokens')
      .send({email: "tess.test@test.com", password: "stupidface"})
      expect(response.status).toEqual(402)
      expect(response.body.token).toEqual(undefined)
      expect(response.body.message).toEqual("Incorrect Password")
  })
  it('it does not return a token when email is incorrect', async () => {
    let response = await request(server)
      .post('/tokens')
      .send({email: "loser.test@loserclub.com", password: "Password"})
      expect(response.status).toEqual(401)
      expect(response.body.token).toEqual(undefined)
      expect(response.body.message).toEqual("Email not found")
  })
});