const mongoose = require('mongoose')

require('../mongodb_helper')

describe('Listing Model', () => {
    beforeEach((done) => {
        mongoose.connection.collections.users.drop(() => {
          done();
        });
      });
      
    it('We would like to create a instance of a listing', () => {
        const listing = new Listing({ 
            userID: 'userID',
            userName: 'Joe Bloggs',
            userEmail: 'someEmail@test.com',
            userPlant: 'testPlant', 
            requestedPlan: 'anotherPlan',
            userLocation: 'somewhere',
            plantPrice: 10,
        });
        expect(user.userID).toEqual('userID');
        expect(user.userName).toEqual('Joe Bloggs');
        expect(user.userEmail).toEqual('someEmail@test.com');
        expect(user.userPlant).toEqual('testPlant');
        expect(user.requestedPlant).toEqual('anotherPlan');
        expect(user.userLocation).toEqual('somewhere');
        expect(user.plantPrice).toEqual(10);
    });

})
