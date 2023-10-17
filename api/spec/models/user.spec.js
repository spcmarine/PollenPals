var mongoose = require("mongoose");
require("../mongodb_helper");
var User = require('../../models/user.js');

describe("user model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it('creates a valid User when called', () => {
    const user = new User({
      email: "test.email@test.com",
      firstName: "Tess",
      lastName: "Test",
      password: "TestPass"
    });
    expect(user.email).toEqual("test.email@test.com");
    expect(user.firstName).toEqual("Tess");
    expect(user.lastName).toEqual("Test");
    expect(user.password).toEqual("TestPass");
  });

  it('can list all users', async () => {
    const response = await User.find().exec()
    console.log(response)
    expect(response).toEqual([]);
  });

  it('can add a user', async () => {
    const user = new User({
      email: "test.email@test.com",
      firstName: "Tess",
      lastName: "Test",
      password: "TestPass"
    });
    await user.save()
    response = await User.find().exec()
    console.log(response)
    expect(response[0]).toMatchObject({
      email: "test.email@test.com",
      firstName: "Tess",
      lastName: "Test",
      password: "TestPass"
    });
  });
});