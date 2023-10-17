const mongoose = require('mongoose')
const Listing = require('../../models/listing.js')

require('../mongodb_helper')

describe('Listing Model', () => {
    beforeEach((done) => {
        mongoose.connection.collections.listings.drop(() => {
          done();
        });
      });

    it('We would like to create a instance of a listing', () => {
        const listing = new Listing({ 
            userID: 'userID',
            userName: 'Joe Bloggs',
            userEmail: 'someEmail@test.com',
            userPlant: 'testPlant', 
            requestedPlant: 'anotherPlan',
            userLocation: 'somewhere',
            plantPrice: 10,
        });
        expect(listing.userID).toEqual('userID');
        expect(listing.userName).toEqual('Joe Bloggs');
        expect(listing.userEmail).toEqual('someEmail@test.com');
        expect(listing.userPlant).toEqual('testPlant');
        expect(listing.requestedPlant).toEqual('anotherPlan');
        expect(listing.userLocation).toEqual('somewhere');
        expect(listing.plantPrice).toEqual(10);
    });

})
