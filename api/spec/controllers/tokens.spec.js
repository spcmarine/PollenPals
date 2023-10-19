const app = require('../../app');
const request = require("supertest");
require('../../mongodb_helper');
const User = require('../../models/user');

describe('/tokens', () => {
  beforeAll( async () => {
    const user = new User({
      email: "tess.test@test.com",
      firstName: "Tess",
      lastName: "Test",
      password: "Password"
    });
    await user.save();
  });

  afterAll(async () => {
    await User.deleteMany({});
  });
});