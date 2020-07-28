const mongoose = require('mongoose');
const db = require('../database/index.js');
const app = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);
import "babel-polyfill";

const fakeData = {
  itemId: '200',
  price: 9.99,
  currency: '$'
};

const badFakeData = {
  itemId: '201',
  currency: '$'
};

describe('Prices Model', () => {

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/mainTitle_price', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  afterAll(async (done) => {
    await mongoose.connection.close((err) => {
      if (err) {
        console.log('error closing mongoose connection: ', err);
      } else {
        done();
      }
    });
  });

  it('creates and saves a db entry', async (done) => {
    const item = new db.Price(fakeData);
    const savedItem = await item.save();

    expect(savedItem._id).toBeDefined();
    expect(savedItem.itemId).toBe(fakeData.itemId);
    expect(savedItem.price).toBe(fakeData.price);
    expect(savedItem.currency).toBe(fakeData.currency);
    done();
  });


  it('should not save a db entry if a required field is empty', async (done) => {
    const badItemDescription = new db.Price(badFakeData);
    let err;

    try {
      const badSavedItem = await badItemDescription.save();
      error = badSavedItem;
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    done();
  })


  it('should find hardcoded and auto-generated entries from seed.js in database', async (done) => {
    const item100 = await db.Price.find({ itemId: 100 });
    const item110 = await db.Price.find({ itemId: 109 });

    expect(item100[0].price).toBe(12.99);
    expect(item100[0].currency).toBe('$');
    expect(item110[0].price).toBeDefined();
    done();
  })

});

describe('Server Endpoints Test', () => {

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/mainTitle_price', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  afterAll(async (done) => {
    await mongoose.connection.close((err) => {
      if (err) {
        console.log('error closing mongoose connection: ', err);
      } else {
        done();
      }
    });
  })


  it('gets the /itemPrice endpoint for both hard-coded and auto-generated data', async (done) => {
    const response = await request.get('/itemPrice/101');
    const response2 = await request.get('/itemPrice/199');

    expect(response.status).toBe(200);
    expect(response.body.price).toBe(9.99);
    expect(response2.body.price).toBeDefined();
    done();
  });

  it('should receive a 404 error when requesting an invalid itemId', async (done) => {
    const response = await request.get('/itemPrice/200');

    expect(response.status).toBe(404);
    done();
  });

  //tests for array queries
  it('correctly retrieves data from the /itemPrice endpoint when given an array of itemIds', async (done) => {
    const response = await request.get('/itemPrice/array101,105,109');
    const item101 = response.body[0];
    const item105 = response.body[1];
    const item109 = response.body[2];

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
    expect(item101.price).toBeDefined();
    expect(item105.price).toBeDefined();
    expect(item109.price).toBeDefined();
    done();
  });

  it('should receive a 404 error when requesting an invalid itemId in an array', async (done) => {
    const response = await request.get('/itemPrice/array199,200,201');

    expect(response.status).toBe(404);
    done();
  });

});